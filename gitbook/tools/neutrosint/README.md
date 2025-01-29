---
description: A tool for investigating ProtonMail email addresses.
---

# NeutrOSINT

## URL

[https://github.com/Kr0wZ/NeutrOSINT](https://github.com/Kr0wZ/NeutrOSINT)

## Description

NeutrOSINT is an open-source Python tool designed to determine if a ProtonMail email address exists and to retrieve its most recent PGP Key creation date.

The tool supports two modes:

* **Light Mode:** Uses ProtonMail's API to check email validity.
* **Selenium Mode (Deprecated):** Connects with your own ProtonMail credentials to check email addresses. This is useful for testing multiple ProtonMail addresses without getting a cooldown as the API used in the Light Mode has a request limit. This mode is currently non-functional due to issues with ProtonMail updates but will be fixed in the future according to the developer.

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
* **Optional:** Google Chrome (for Selenium Mode, when it will be functional)
* **Optional:** ProtonMail credentials (for Selenium Mode, when it will be functional)
* **Optional:** Proxy configuration if needed (for bypassing the API's request limit).
* **Optional:** A file containing the list of email addresses for batch operations

## Limitations

* **Selenium Mode Deprecation:** The default Selenium mode is deprecated and currently non-functional due to recent ProtonMail updates.
* **API Limits:** The light mode relies on ProtonMail's API that has request limits. A proxy usage is recommended to avoid excessive exposure of requests.
* **On PGP Key Creation Date**: The PGP Key Creation Date isn't always the email address creation date as a new PGP Key can be generated from the ProtonMail settings.

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

Start your proxy and specify it in the command line (e.g. 127.0.0.1:8080). You can check the following resources to get a working proxy:

* [**Gluetun**](https://github.com/qdm12/gluetun)**:** allows you to create containers that include both a VPN and an HTTP Proxy (VPN Subscription is required on one of the supported services)
* [**Tor**](https://www.torproject.org/)**:** The Onion Router opens a proxy at 127.0.0.1:9050
* You can find free proxies online but make sure these align with your privacy and operational security requirements.

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

**Note:** if you don't want to use the builtin proxy feature, you can consider using tools such as [ProxyChains](https://github.com/haad/proxychains).

## Ethical Considerations

Use responsibly for legitimate research purposes.

## Guides and articles

[GitHub - NeutrOSINT](https://github.com/Kr0wZ/NeutrOSINT): Includes detailed instructions for setup and usage.

## Tool provider

The tool is developed and maintained by [KrowZ](https://blog.synoslabs.com/about.html), a french pentester, youtuber, streamer and OSINT enthousiast.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat volunteer team |
