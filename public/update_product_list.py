import json

# Step 1: Read the JSON file
try:
    with open('ProductList.json', 'r') as file:
        products = json.load(file)
except Exception as e:
    print(f"Error reading JSON file: {e}")
    exit()

# Step 2: Update the img_url for products with the "Paste" category
for product in products:
    if product.get('category') == 'Dairy':
        product['img_url'] = 'https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg'

# Print the number of updated products to verify
updated_count = sum(1 for product in products if product.get('category') == 'Dairy')
print(f"Number of products updated: {updated_count}")

# Step 3: Write the updated data back to the JSON file
try:
    with open('ProductList.json', 'w') as file:
        json.dump(products, file, indent=4)
    print("JSON file has been updated successfully.")
except Exception as e:
    print(f"Error writing to JSON file: {e}")
