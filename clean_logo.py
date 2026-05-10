from PIL import Image

img_path = r"c:\Users\G15\Documents\Claude-Antigravity projects\PP Ingenieria\public\assets\Logo.png"
img = Image.open(img_path).convert("RGBA")

datas = img.getdata()
newData = []
for item in datas:
    # Convert near-white pixels to transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save(img_path, "PNG")
print("Background removed from logo.")
