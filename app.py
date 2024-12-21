import requests

# Define the URL and request details
url = "https://cdc.vit.ac.in/mydrivedetails"
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    # Add cookies if necessary
    "Cookie": "_clck=...; _ga=...",
}
data = {"drive_id": "126e7e69-736c-4bc4-8e07-561f06891519"}

# Send the POST request
try:
    response = requests.post(url, json=data, headers=headers)

    # Print the status code and reason for debugging
    print(f"Status Code: {response.status_code} | Reason: {response.reason}")

    # Handle the response
    try:
        response_data = response.json()  # Try to parse as JSON
        print("Response JSON:")
        print(response_data)
    except requests.exceptions.JSONDecodeError:
        # Handle non-JSON responses
        print("Non-JSON response received:")
        print(response.text)

except requests.exceptions.RequestException as e:
    # Handle any exceptions during the request
    print("Request failed:", e)
