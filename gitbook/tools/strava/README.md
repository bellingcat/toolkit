---
updated: '2026-09-01'
description: >-
  A fitness tracking platform where publicly shared GPS activity data can reveal
  movement patterns, routines, and precise locations of individuals, including
  military personnel and public staff.
---

# Strava

## URL

[https://www.strava.com](https://www.strava.com)

## Description

Strava is a fitness app that allows users to record and publish outdoor activities - including running, cycling, and hiking - on an interactive map using GPS data. Each activity is automatically mapped and tagged with metrics such as distance, duration, pace, and elevation. Beyond activity tracking, Strava functions as a social network, with users maintaining public profiles, following each other, and interacting through comments and kudos (the platform's equivalent of a like).

For open source investigators, Strava is valuable because its default privacy settings favour visibility. New accounts are set to “Everyone” by default for profile, activities, group activities and mentions ([Strava Support](https://support.strava.com/en-us/articles/15401763-what-are-my-privacy-defaults-when-i-create-a-strava-account)), meaning activities, routes, and profile information are openly accessible to anyone, including non-registered users browsing the global heatmap. Users under 18 receive stricter default privacy settings ([Strava Community Hub](https://communityhub.strava.com/insider-journal-9/what-are-my-default-settings-when-i-create-a-strava-account-1517)). Even users who have partially adjusted their privacy settings may unknowingly expose sensitive data through segments, leaderboards, and the [Flyby feature](https://labs.strava.com/flyby/).

Strava is accessible via desktop at [strava.com](https://strava.com) and via mobile app on iOS and Android. The global heatmap is partially accessible without an account, but street-level detail and key investigative features require a registered account.

#### Key investigative entry points:

1. **Profile Analysis** - Each public Strava profile includes a username, profile photo, location (city or region), and activity history. Reviewing a subject's activity history can reveal routines, frequently visited locations, home and work areas, and travel patterns over time. Timestamps on activities establish patterns of behaviour that can be cross-referenced with other data sources.
2. **Global Heatmap** - Strava aggregates all public user activity into a global heatmap available at [strava.com/maps/global-heatmap](https://strava.com/maps/global-heatmap), filterable by sport type. The heatmap is [updated monthly](https://support.strava.com/en-us/articles/15401880-the-global-heatmap-and-strava-metro) for yearly data and [every 24 hours for weekly data](https://support.strava.com/en-us/articles/15401630-weekly-heatmap). In populated areas it shows well-used running and cycling routes. In restricted or sensitive areas - military bases, government compounds, conflict zones - unusual activity patterns or the absence of activity can itself be investigatively significant.
3. **Segments and Leaderboards** - Segments are user-defined stretches of road or trail on which Strava records and ranks times. Any registered user can view the top 10 athletes on a segment’s leaderboard; the full leaderboard, listing every athlete who has completed the segment along with the date of their most recent effort, requires a Strava subscription ([Strava Support](https://support.strava.com/hc/en-us/articles/360030851772-Segment-Leaderboard-Filters)). Clicking through from a leaderboard entry leads directly to that user's public profile. This makes segments a powerful tool for identifying individuals active in a specific location - including sensitive locations where only a narrow group of people would plausibly be running.
4. **The Fake Run Technique** - Investigators can log a fake GPS activity in a specific location to surface other Strava users who also exercise there. By choosing a location where only a specific group of people - such as security personnel or military staff - are likely to run, researchers can begin identifying members of that group from the users who appear in the resulting Flyby or segment data.
5. **Flybys** - The Flyby feature shows other users who were active near the same location at the same time as a recorded activity. This is directly applicable to witness identification - investigators can upload a route corresponding to a known incident location and time, then use Flyby to surface individuals who were present. Flyby is only available to logged-in users, and it does not display other athletes for activities recorded before 6 February 2024 ([Strava Support](https://support.strava.com/en-us/articles/15401996-flyby-privacy-controls)).
6. **Connections and Networks** - Strava's social layer allows investigators to map relationships between accounts through public follower and following lists, kudos interactions, and comments on activities. Clubs and groups - organised by location, sport type, or institutional affiliation - can surface additional profiles linked to a specific place or organisation, even when individual activities are set to private.

## How to use it

Strava's investigative value lies in moving systematically from broad geographic patterns down to individual activity data. The workflow below follows that logic - starting with the regional heatmap and working toward street-level detail and segment analysis.

**Step 1 - Log in and zoom to city level**.

Create a free account at strava.com and log in. Search for your target location and zoom in to city level. With both Heatmaps and Segments active, the map shows a dense overlay of activity - orange lines indicate named segments, blue lines show aggregated heatmap activity. At this scale investigators can begin identifying areas of concentrated activity, unusual route patterns, or the presence of segments inside restricted or sensitive locations.

<figure><img src=".gitbook/assets/strava-login-zzom-sa.png" alt=""><figcaption><p>San Francisco at city scale with both Heatmaps and Segments filters active after login. Orange lines are named segments; blue lines show aggregated GPS activity from all public users. The density of segments in a civilian urban area illustrates the volume of data available — in a more restricted location, even a small number of segments can reveal significant information about who is present and what routes they use.</p></figcaption></figure>

**Step 2 - Zoom to street level and filter by activity type.**

Zoom further into your area of interest. At this scale individual segment names become readable and the heatmap shows activity at street and path level. Use the sport type filter to narrow results - switching from **All Sports** to **Walk** or **Run** isolates the relevant activity type for your investigation.

<figure><img src=".gitbook/assets/strava-zoomed.png" alt=""><figcaption><p>Street-level view of the Presidio and Golden Gate area with Heatmaps and Segments active. The density of named segments in this area — a former US Army base — illustrates how Strava data can surface activity patterns in locations with restricted access. Each orange segment line is clickable and leads to a leaderboard of users who have recorded activity there.</p></figcaption></figure>

**Step 3 - Switch sport filters to refine results.**

Use the sport type dropdown to isolate specific activity types. The screenshot below shows the same area filtered to **Walk** only, revealing foot traffic patterns along the coastal path at maximum zoom. At this level of detail, regular routes, entry and exit points, and areas of concentrated activity become clearly visible - information that can help establish patterns of life for individuals active in that location.

<figure><img src=".gitbook/assets/strava-details-spots.png" alt=""><figcaption><p>Maximum zoom near Fort Point with the Walk filter active. The blue heatmap trail shows foot traffic patterns along the coastal path with high precision. The sport filter visible in the toolbar illustrates how investigators can isolate specific activity types to refine results. At this zoom level, individual paths and access routes become distinguishable.</p></figcaption></figure>

**Step 4 - Click a segment to access the leaderboard.**

Click on any named segment (orange line) to open its detail panel. The leaderboard lists athletes who have completed that segment, along with the date of their most recent effort. Free accounts can only see the top 10; a subscription is needed to view the full leaderboard ([Strava Support](https://support.strava.com/hc/en-us/articles/360030851772-Segment-Leaderboard-Filters)). This is one of the most powerful investigative features in Strava - it converts geographic data into a list of identifiable individuals who have been physically present in a specific location.

From the leaderboard, click through to any public profile to view the user's activity history, home region, profile photo, and social connections. Avoid giving [kudos](https://support.strava.com/en-us/articles/15402054-what-is-kudos) or leaving comments during your research, as these will notify the account holder.

**Step 5 - Archive.**

Users can change their privacy settings at any time, making previously public profiles and activities inaccessible without warning. Screenshot or archive any relevant profiles, activity data, or leaderboard entries as soon as you find them. There is no native export function.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Strava operates on a freemium model. The free tier covers many open source investigation needs: it provides access to the global heatmap, the top 10 on segment leaderboards, public profiles, and user search. Some features relevant to investigators are restricted to paying subscribers, notably full segment leaderboards ([Strava Support](https://support.strava.com/hc/en-us/articles/360030851772-Segment-Leaderboard-Filters)) and community photos on routes.

The paid subscription (Strava Premium) is oriented toward personal athletic performance and adds training analysis tools with limited investigative value. Current pricing and plan options are listed on [Strava's subscription page](https://www.strava.com/subscribe) .

## Level of Difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

The global heatmap is partially accessible without an account - investigators can browse at city or regional scale without logging in. However, zooming to street-level detail triggers a login prompt, as shown in the screenshots below.

<figure><img src=".gitbook/assets/strava-heatmap-without-login.png" alt=""><figcaption><p>Strava's global heatmap as seen without a registered account. City and regional scale activity is visible, but zooming to street level requires login.</p></figcaption></figure>

<figure><img src=".gitbook/assets/strava-zoomßoption-without-login.png" alt=""><figcaption><p>Attempting to zoom into street-level detail without an account triggers this prompt. A free registered account is sufficient to unlock full heatmap access.</p></figcaption></figure>

A free Strava account registered with an email address, Google, or Apple ID is required to access street-level heatmap data, segment leaderboards, individual profiles, and the Flyby feature. A free account is sufficient for most features, but viewing full segment leaderboards requires a paid subscription.

## Limitations

Using Strava for open source research has several limitations:

1. **Privacy settings:** Many users have set their profiles to private or followers-only, limiting visibility to non-connections. Activities marked "Only You" or "Followers" are excluded from the heatmap automatically.
2. **Hidden start and end points:** Strava hides the first and last [200 metres](https://support.strava.com/en-us/articles/15402012-edit-map-visibility) of activity maps by default once a user has uploaded their first activity, and users can extend this to up to a one-mile radius.
3. **Hidden start times:** Users can also choose to hide the start time of their activities, limiting the ability to establish precise behavioural timelines.
4. **GPS inaccuracies:** Activity data [accuracy](https://support.strava.com/hc/en-us/articles/216917917-Why-is-GPS-data-sometimes-inaccurate) varies depending on GPS signal strength and signal obstruction. [Timestamps](https://support.strava.com/hc/en-us/articles/216515918-My-Activity-Has-the-Wrong-Date-or-Start-Time) may also be unreliable depending on a user's timezone settings.
5. **Incomplete data:** Users may record only some activities, use the app sporadically, or switch to a private account after earlier public activity - leading to gaps in the available record.
6. **Manipulated data:** Users can manually edit or fabricate activity data, either intentionally or unintentionally, which can produce false or misleading information.
7. **Desktop vs mobile:** More detailed heatmap data is available on desktop. The weekly heatmap is only accessible on desktop.
8. **Flyby availability:** The Flyby feature has been subject to [privacy restrictions](https://support.strava.com/en-us/articles/15401996-flyby-privacy-controls) and may not be available for all users or activities depending on individual privacy settings. Flyby only surfaces another athlete if that user's activity privacy and their separate Flyby setting are both set to "Everyone," so it under-represents who was actually present at a given time and place.

## Ethical Considerations

Strava displays user-generated location data that individuals may have shared without fully understanding the implications of the platform's default public settings.

1. **Default visibility:** New Strava accounts are set to public by default. Many users - including military personnel and security staff - may be unaware that their activities are publicly accessible and aggregatable by third parties.
2. **Patterns of life:** Even individually innocuous data points - a morning run, a regular cycling route - can, when aggregated over time, reveal highly sensitive information about a subject's home address, workplace, daily routine, and travel schedule. Investigators should handle this data with proportionality.
3. **Sensitive locations:** Investigations involving military bases, government facilities, or conflict zones may surface data about individuals in vulnerable or dangerous positions. This data should not be published or shared without careful consideration of the risks.
4. **Opt-out mechanisms:** Users can exclude their data from the heatmap and restrict profile visibility through Strava's privacy settings, but many are unaware of these options. The existence of opt-out does not reduce the investigator's ethical responsibility.
5. **Real-world consequences - individual targeting:** In July 2023, former [Russian submarine commander Stanislav Rzhitsky](https://nypost.com/2023/07/11/russian-submarine-captain-killed-by-assassin-on-morning-run/) was shot and killed while jogging in Krasnodar, Russia. Reporting at the time suggested his regular running route, shared publicly on Strava, may have helped identify his location and pattern of movement. The use of Strava data carries potential real-world consequences that investigators must weigh carefully.
6. **Real-world consequences - military operational security:** This risk isn't limited to individuals. In 2018, Strava's heatmap [revealed secret U.S. military bases](https://techcrunch.com/2018/01/28/strava-exposes-military-bases/), prompting a Pentagon review. It recurred in 2026: [Stars and Stripes](https://www.stripes.com/theaters/middle_east/2026-08-14/geolocation-strava-centcom-adversaries-public-22541855.html) reported over 1,300 Strava users posting workouts from U.S. bases across the Middle East during the Israel-Iran escalation, including at Jordan's Muwaffaq Salti Air Base the day before [a strike there killed three U.S. soldiers](https://taskandpurpose.com/news/us-iran-war-strava-bases/). Investigators should treat this as a recurring pattern, not a one-off.
7. **Fabricated activities:** techniques such as the Fake Run Technique involve uploading activities that did not happen. Strava’s terms prohibit inauthentic content, including manipulating data used for leaderboards ([Strava Terms of Service](https://www.strava.com/legal/terms); [Strava transparency report](https://oag.ca.gov/sites/default/files/California%20transparency%20report%20\(AB%20587\)%20-%20Strava.pdf/California%20transparency%20report%20\(AB%20587\)%20-%20Strava.pdf)), and Strava actively detects and removes improper activity data from its leaderboards ([Strava Support](https://support.strava.com/hc/en-us/articles/216919387); [BikeRadar](https://www.bikeradar.com/news/strava-cracks-down-on-leaderboard-cheats)). Such activities can also distort segment data for other users. For Flyby to work, the activity must itself be set to “Everyone,” which exposes the research account. Investigators should weigh these risks, use a dedicated research account, and delete any test activity afterwards.

## **Similar Tools**

The following tools in the Bellingcat toolkit similarly surface user-generated, location-tagged content that can be used to identify individuals or map activity in specific areas:

* [**Snap Map**](https://bellingcat.gitbook.io/toolkit/more/all-tools/snap-map) - real-time geotagged public Snaps on an interactive map, useful for situational awareness and human network investigations.
* [**Instagram Location Search**](https://bellingcat.gitbook.io/toolkit/more/all-tools/instagram-location-search) - searches for geotagged Instagram posts near specified coordinates.
* [**Mapillary**](https://bellingcat.gitbook.io/toolkit/more/all-tools/mapillary) - crowdsourced street-level imagery tagged to precise locations, useful for visual verification of routes and locations identified via Strava.
* [**AllTrails**](https://bellingcat.gitbook.io/toolkit/more/all-tools/alltrails) - a trail discovery platform where public user profiles, activity history, and completed trails can surface individual movement patterns, though it lacks Strava's heatmap and segment leaderboards.

## Guides and Article

* Toler, Aric: How to Use and Interpret Data from Strava's Activity Map, Bellingcat, 2018, at [https://www.bellingcat.com/resources/how-tos/2018/01/29/strava-interpretation-guide/](https://www.bellingcat.com/resources/how-tos/2018/01/29/strava-interpretation-guide/).
* Farberov, Snejana: Russian submarine captain on Ukraine blacklist killed by assassin after sharing jogging route on Strava workout app, New York Post, July 2023, at [https://nypost.com/2023/07/11/russian-submarine-captain-killed-by-assassin-on-morning-run/](https://nypost.com/2023/07/11/russian-submarine-captain-killed-by-assassin-on-morning-run/).
* GIJN: Running Into Open Secrets - How to Investigate Using the Strava Fitness App, April 2025, at [https://gijn.org/stories/investigations-using-strava-fitness-app/](https://gijn.org/stories/investigations-using-strava-fitness-app/).
* Bourdon, Sébastien & Schirer, Antoine: #StravaLeaks investigative series, Le Monde, 2024, at [https://www.lemonde.fr/en/stravaleaks/](https://www.lemonde.fr/en/stravaleaks/).
* Stars and Stripes: Strava users still revealing routines of Middle East base life despite geolocation restrictions, August 2026, at [https://www.stripes.com/theaters/middle\_east/2026-08-14/geolocation-strava-centcom-adversaries-public-22541855.html](https://www.stripes.com/theaters/middle_east/2026-08-14/geolocation-strava-centcom-adversaries-public-22541855.html).
* Task & Purpose: US bases, troops are once again being exposed by Strava, August 2026, at [https://taskandpurpose.com/news/us-iran-war-strava-bases/](https://taskandpurpose.com/news/us-iran-war-strava-bases/).
* 1News: Fitness app data exposes location of hundreds of NZDF staff, October 2026, at [https://www.1news.co.nz/2026/10/06/fitness-app-data-exposes-location-of-hundreds-of-nzdf-staff/](https://www.1news.co.nz/2026/10/06/fitness-app-data-exposes-location-of-hundreds-of-nzdf-staff/).
* Stars and Stripes: Strava users still revealing routines of Middle East base life despite geolocation restrictions, August 2026, at [https://www.stripes.com/theaters/middle\_east/2026-08-14/geolocation-strava-centcom-adversaries-public-22541855.html](https://www.stripes.com/theaters/middle_east/2026-08-14/geolocation-strava-centcom-adversaries-public-22541855.html).

## Tool provider

Strava Inc., USA

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

According to its [Cookie Policy](https://www.strava.com/legal/cookie_policy), Strava uses third-party cookies, including for targeted advertising and ad measurement; the advertising cookies named are Google AdWords, Branch and X ([Strava Support](https://support.strava.com/en-us/articles/15402045-strava-cookies-policy)). Users in the EU can manage non-essential cookies via the consent banner.

| Page maintainer      |
| -------------------- |
| Tsvetelina Yordanova |
