from PIL import Image
import os

# Specify the folder path containing the PNG images
folder_path = "pics"

# Iterate through all the files in the folder
for filename in os.listdir(folder_path):
    # Check if the file is a PNG image
    if filename.endswith(".png"):
        # Open the image
        image_path = os.path.join(folder_path, filename)
        image = Image.open(image_path)

        # Resize the image to 500x500 pixels
        resized_image = image.resize((500, 500))

        # Save the resized image, overwriting the original file
        resized_image.save(image_path)

        # Close the image
        image.close()

print("Scaling complete!")
