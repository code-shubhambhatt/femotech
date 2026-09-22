import os
from PIL import Image

output_dir = r"c:\Users\DELL\Coding\Freelance\public\images\products"

products = [
    "blister_foil_roll.jpg",
    "strip_foil_roll.jpg",
    "alu_alu_roll.jpg",
    "paper_alu_roll.jpg",
    "cr_foil_roll.jpg",
    "pvc_film_roll.jpg"
]

for p in products:
    p_path = os.path.join(output_dir, p)
    if os.path.exists(p_path):
        img = Image.open(p_path)
        w, h = img.size
        # The green header from the next row is at the bottom ~14%
        # Let's crop from y: 0 to 86% of height
        clean_img = img.crop((0, 0, w, int(h * 0.86)))
        clean_img.save(p_path, quality=95)
        print(f"Trimmed bottom green line from {p}")

print("All product images cleanly trimmed!")
