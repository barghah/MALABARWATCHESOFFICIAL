from PIL import Image

img = Image.open(r'C:\Users\mxsab\.gemini\antigravity-ide\brain\57f801b8-8600-46b1-aad9-26261e58d8f0\.user_uploaded\media_1787641394042.png').convert('RGBA')

# The original image is 267 x 235.
# Let's crop to keep the M&W part and remove the text at the bottom.
img = img.crop((35, 30, 230, 120))

data = img.getdata()
new_data = []

for item in data:
    avg = (item[0] + item[1] + item[2]) / 3
    # The logo letters are dark.
    if avg < 140: 
        # Deep bronze/brown
        new_data.append((45, 28, 15, 255))
    else:
        # Transparent
        new_data.append((255, 255, 255, 0))

img.putdata(new_data)
img.save(r'd:\PROJECTS\malabarwatches\site\public\logo.png')
