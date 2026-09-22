import fitz
import os
from PIL import Image

uploaded_dir = r"C:\Users\DELL\.gemini\antigravity-ide\brain\d6f35e85-f752-4052-8bb2-723378bf547f\.user_uploaded"
output_dir = r"c:\Users\DELL\Coding\Freelance\public\images\products"

pdf_path = os.path.join(uploaded_dir, "media_1790100968090.pdf")
doc = fitz.open(pdf_path)

# Page 15 (Annexure-II)
page15 = doc[14]
pix15 = page15.get_pixmap(dpi=250)
page15_img = Image.frombytes("RGB", [pix15.width, pix15.height], pix15.samples)
w, h = page15_img.size

# The PVC roll is on the top-right / middle-right (x: ~60% to 78%, y: ~15% to 28%)
pvc_crop = page15_img.crop((int(w * 0.61), int(h * 0.14), int(w * 0.78), int(h * 0.27)))
pvc_crop.save(os.path.join(output_dir, "pvc_film_roll.jpg"), quality=95)
print("Saved pvc_film_roll.jpg")
