---
description: A tool for investigating Proton Mail addresses.
---

# NeutrOSINT

## URL

[https://github.com/Kr0wZ/NeutrOSINT](https://github.com/Kr0wZ/NeutrOSINT)

## Description

NeutrOSINT is an open-source Python tool designed to determine if a Proton Mail email address exists and to retrieve its most recent PGP Key creation date.

{% hint style="info" %}
**PGP (Pretty Good Privacy)**

PGP is an encryption method used to encrypt and sign messages developed by Philip Zimmermann in 1991.

* It ensures **confidentiality** by encrypting data so only the intended recipient can decrypt it;
* It guarantees **integrity** by allowing the recipient to verify that the message wasn’t altered during transit;
* It offers **authentication** through digital signatures that confirm the sender’s identity;
* And it supports **non-repudiation**, meaning the sender cannot later deny having sent the signed message

Proton Mail automatically creates PGP key pairs with each email. These pairs are then used to encrypt and sign outgoing messages as well as decrypt incoming messages.

You can generate a new PGP key pair in your Proton Mail settings.

For more information on PGP and how it is used by Proton Mail, check these two guides:

* [What is PGP encryption and how does it work? - Proton Blog](https://proton.me/blog/what-is-pgp-encryption)
* [How to use PGP with Proton Mail - Proton Blog](https://proton.me/support/how-to-use-pgp)
{% endhint %}

<figure><img src=".gitbook/assets/demo.gif" alt=""><figcaption><p>NeutrOSINT uses the email's associated PGP key to detect if an email exists or not.</p></figcaption></figure>

The tool supports two modes:

* **Light Mode:** Uses Proton Mail's API to check email validity.
* **Selenium Mode (Deprecated):** Connects with your own Proton Mail credentials to check email addresses. This is useful for testing multiple Proton Mail addresses without getting a cooldown as the API used in the Light Mode has a request limit. This mode is currently non-functional due to issues with Proton Mail updates but will be fixed in the future according to the developer.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The tool is free and open source.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

The tool requires users to run Python scripts and configure API access or credentials.

## Requirements

* **Python** (compatible with Python 3.6+)
* **Optional:** Google Chrome (for Selenium Mode)
* **Optional:** Proton Mail credentials (for Selenium Mode)
* **Optional:** Proxy configuration if needed (for bypassing the API's request limit).
* **Optional:** A file containing the list of email addresses for batch operations

## Limitations

* **Selenium Mode Deprecation:** The default Selenium mode is deprecated and currently non-functional due to recent Proton Mail updates.
* **On PGP Key Creation Date**: The PGP Key Creation Date isn't always the email address creation date as a new PGP Key can be generated from the Proton Mail settings.
* **API Limits:** The light mode relies on Proton Mail's API that has request limits. You might want to avoid getting a cooldown by using a proxy or a VPN.

{% hint style="info" %}
**Proxy**

In networking, a **proxy server** is a server that acts as an intermediary for your network traffic.

Your computer asks the proxy to ask another server for something, and that server returns it to the proxy, which relays it back to you.

VPNs can be thought of as a form of proxies that ensures, in theory, end-to-end encryption among other properties.

More on this [here](https://www.fortinet.com/resources/cyberglossary/proxy-vs-vpn).
{% endhint %}

## How to Use

### Installation

1. **Clone the NeutrOSINT Repository:**

Open your terminal and run:

```
git clone https://github.com/Kr0wZ/NeutrOSINT.git
cd NeutrOSINT
```

2. **Set Up a Virtual Environment (Optional but Recommended)**

```
python3 -m venv venv
source venv/bin/activate # For Linux/Mac
venv\Scripts\activate # For Windows
```

[This article](https://new.pythonforengineers.com/blog/python-tip-always-use-a-virtual-environment/) explains why virtual environments are recommended for Python.

3. **Install Dependencies:**

```
pip install -r requirements.txt
```

### Usage

NeutrOSINT has two main modes of operation: Light Mode and Selenium Mode (deprecated). We will focus on the functional Light Mode only.

#### Command Syntax

```
python main.py [-l] [-f FILE | -e EMAIL] [-o FILE] [-P IP:PORT]
```

Common Options

```
-l, --light: Use light mode (recommended for most cases).
-e EMAIL: Check a single email address.
-f FILE: Check a list of email addresses (one per line in a file).
-o FILE: Specify the output file to store results.
-P IP:PORT: Use a proxy (Useful for batch requests).
```

### Examples

**Example 1: Validate a Single Email Address**

```
python main.py -l -e testemail@proton.me
```

Output Example (printed in terminal):

```
[+] Valid email: testemail@proton.me - Creation date: 2023-01-18 11:13:24
```

**Example 2: Validate Multiple Emails from a File**

Create a file named **emails.txt** with one email address per line:

```
testemail1@proton.me
testemail2@proton.me
invalidemail@proton.me
```

Run the command:

```
python main.py -l -f emails.txt -o results.txt
```

Output Example (results.txt):

```
[+] Valid email: testemail1@proton.me - Creation date: 2024-10-01 10:45:32
[+] Valid email: testemail2@proton.me - Creation date: 2023-12-15 14:20:11
[-] Proton email not exists: : invalidemail@proton.me
```

**Example 3: Using a Proxy (Advanced)**

Start your proxy and specify it in the command line (e.g. 127.0.0.1:8080). Your might want to use:

* [**Tor**](https://www.torproject.org/)**:** The Onion Router opens a proxy at 127.0.0.1:9050
* Any free or paid proxy from a provider you trust.
* Your own proxy.

```
python main.py -l -e testemail@proton.me -o results.txt -P 127.0.0.1:8080
```

Output:

```
[+] Valid email: testemail@proton.me - Creation date: 2023-01-18 11:13:24
```

### Advanced Usage: Bypassing API Limits through proxies (requires a bit of scripting knowledge)

1. **Using multiple proxies**

If you have multiple emails to test, you can develop your own script to use multiple proxies and avoid a cooldown. Let's say you have three different proxies. Here's how you would do it in bash:

```bash
#!/bin/bash

# Define the list of proxies
proxies=(
    "127.0.0.1:8080"
    "127.0.0.1:8081"
    "127.0.0.1:8082"
)

# Define the input file containing email addresses
input_file="emails.txt"

# Define the output file to store the results
output_file="results.txt"

# Loop through each email address
while IFS= read -r email; do
    for proxy in "${proxies[@]}"; do
        echo "Testing email: $email with proxy: $proxy"
        # Execute the command and append the results directly to the output file
        python main.py -l -e "$email" -P "$proxy" >> "$output_file" 2>&1
        if [ $? -ne 0 ]; then
            echo "Error while testing email $email with proxy $proxy. Trying next proxy."
            continue  # Change proxy and retry
        else
            break  # Exit the proxy loop if successful
        fi
        # Wait for 2 seconds to avoid cooldowns
        sleep 2
    done
done < "$input_file"

echo "Testing completed. Results appended to $output_file."

```

2. **Using Tor Circuit Changing**

Another solution would be to route requests through the Tor network. If a request fails, the script requests a new Tor circuit to attempt the validation again.

```bash
#!/bin/bash

# Define the Tor control port and authentication (if required)
tor_control_port="127.0.0.1:9051"
tor_password=""  # Add the Tor control password if needed

# Define the input file containing email addresses
input_file="emails.txt"

# Define the output file to store the results
output_file="results.txt"

# Function to request a new Tor circuit
new_tor_circuit() {
    echo "Requesting a new Tor circuit..."
    if [ -n "$tor_password" ]; then
        echo -e "AUTHENTICATE \"$tor_password\"\nSIGNAL NEWNYM\nQUIT" | nc $tor_control_port
    else
        echo -e "SIGNAL NEWNYM\nQUIT" | nc $tor_control_port
    fi
    sleep 10  # Wait for the new circuit to be established
}

# Loop through each email address
while IFS= read -r email; do
    while true; do
        echo "Testing email: $email with Tor circuit"
        # Execute the command and append the results directly to the output file
        python main.py -l -e "$email" >> "$output_file" 2>&1
        if [ $? -ne 0 ]; then
            echo "Error while testing email $email. Requesting new Tor circuit."
            new_tor_circuit  # Request a new Tor circuit and retry
        else
            break  # Exit the retry loop if successful
        fi
        # Wait for 2 seconds to avoid cooldowns
        sleep 2
    done
done < "$input_file"

echo "Testing completed. Results appended to $output_file."
```

## Ethical Considerations

Use responsibly for legitimate research purposes.

## Guides and articles

[GitHub - NeutrOSINT](https://github.com/Kr0wZ/NeutrOSINT): Includes detailed instructions for setup and usage.

## Tool provider

The tool is developed and maintained by [KrowZ](https://blog.synoslabs.com/about.html), a french pentester, youtuber, streamer and OSINT enthusiast.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
