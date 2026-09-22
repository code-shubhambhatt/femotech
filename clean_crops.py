import os
from PIL import Image

output_dir = r"c:\Users\DELL\Coding\Freelance\public\images"

# 1. Clean crop selaqui_plant_exterior.jpg (remove top header "GENERAL INFORMATION" line)
plant_path = os.path.join(output_dir, "facility", "selaqui_plant_exterior.jpg")
if os.path.exists(plant_path):
    img = Image.open(plant_path)
    w, h = img.size
    # Crop from y = 4% to 99% to remove the text header at top
    clean_plant = img.crop((0, int(h * 0.04), w, int(h * 0.98)))
    clean_plant.save(plant_path, quality=95)
    print("Cleaned plant exterior image")

# 2. Clean crop product images (remove the green header banner so we just get the pure rolls)
products = [
    "blister_foil_roll.jpg",
    "strip_foil_roll.jpg",
    "paper_alu_roll.jpg",
    "alu_alu_roll.jpg",
    "cr_foil_roll.jpg"
]

for p in products:
    p_path = os.path.join(output_dir, "products", p)
    if os.path.exists(p_path):
        img = Image.open(p_path)
        w, h = img.size
        # The green title is in the top ~16%
        # The image of the roll is below it
        clean_roll = img.crop((int(w * 0.02), int(h * 0.16), int(w * 0.98), int(h * 0.98)))
        clean_roll.save(p_path, quality=95)
        print(f"Cleaned {p}")

print("Image refinement complete!")
