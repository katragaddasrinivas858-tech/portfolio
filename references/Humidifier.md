IoT Smart Humidifier
Overview
This project is an ESP-based IoT humidifier controller that measures humidity and temperature, controls a humidifier relay, and exposes remote operation through Blynk.

Features
Remote control using Blynk
OTA firmware updates
Dynamic WiFi provisioning
Humidity monitoring
Hardware Components
ESP32 development board
DHT11 humidity/temperature sensor
Float/water-level sensor
1-channel relay module
Humidifier/mister actuator
System Architecture
The ESP32 collects local sensor readings and applies control logic at the edge. Telemetry and commands are synchronized with Blynk Cloud, and the mobile app acts as the remote UI. OTA update traffic is handled directly by the device over WiFi.

Firmware Architecture
The firmware is split into focused modules:

wifi_manager: provisioning portal, WiFi connection and reconnect flow
ota_update: OTA setup and handling
sensor_manager: sensor initialization and readings
humidifier_control: relay control, thresholds, and safety logic
main.cpp: startup, scheduler, and module orchestration
Setup Instructions
Install Arduino libraries: Blynk, WiFiManager, DHT sensor library, ArduinoOTA (ESP32 core).
Open firmware/main.cpp and set:
BLYNK_TEMPLATE_ID
BLYNK_TEMPLATE_NAME
BLYNK_AUTH_TOKEN
WIFI_SSID
WIFI_PASSWORD
OTA_PASSWORD
Build and flash to ESP32.
On first boot, use captive portal AP SmartHumidifier-Setup if required.
Add virtual pins V0 to V7 in Blynk according to firmware mapping.
Project Outcome
This project won 3rd Prize at a campus mechanical exhibition.