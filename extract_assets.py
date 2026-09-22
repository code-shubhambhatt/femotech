import fitz
import os
from PIL import Image
import shutil

output_dir = r"c:\Users\DELL\Coding\Freelance\public\images"
os.makedirs(output_dir, exist_ok=True)
os.makedirs(os.path.join(output_dir, "products"), exist_ok=True)
os.makedirs(os.path.join(output_dir, "facility"), exist_ok=True)

uploaded_dir = r"C:\Users\DELL\.gemini\antigravity-ide\brain\d6f35e85-f752-4052-8bb2-723378bf547f\.user_uploaded"

# 1. Copy the 5-colour rotogravure printing press
press_src = os.path.join(uploaded_dir, "media_1790101194561.jpg")
if os.path.exists(press_src):
    # Crop off the red text annotation on top/right if needed or crop to the machine
    img = Image.open(press_src)
    # The machine is on the left side of the screenshot: width ~50%
    w, h = img.size
    # Let's crop the machine area: left 0 to w*0.48
    machine_crop = img.crop((0, 0, int(w * 0.48), h))
    machine_crop.save(os.path.join(output_dir, "facility", "rotogravure_press.jpg"), quality=92)
    print("Saved rotogravure_press.jpg")

# 2. Copy the rewinding/slitting machine
rewind_src = os.path.join(uploaded_dir, "media_1790101194550.jpg")
if os.path.exists(rewind_src):
    img = Image.open(rewind_src)
    w, h = img.size
    # Machine is on the left side: left 0 to w*0.48
    rewind_crop = img.crop((0, 0, int(w * 0.49), h))
    rewind_crop.save(os.path.join(output_dir, "facility", "rewinding_machine.jpg"), quality=92)
    print("Saved rewinding_machine.jpg")

# 3. Open PDF to extract Selaqui green building and product rolls
pdf_path = os.path.join(uploaded_dir, "media_1790100968090.pdf")
doc = fitz.open(pdf_path)
print(f"Total PDF pages: {len(doc)}")

# Page 3 (0-indexed page 2): Plant exterior building
page3 = doc[2]
pix3 = page3.get_pixmap(dpi=200)
page3_img = Image.frombytes("RGB", [pix3.width, pix3.height], pix3.samples)
# The building photo is in the center of page 3:
# Top ~20% to 75%, width 10% to 90%
pw, ph = page3_img.size
building_crop = page3_img.crop((int(pw * 0.08), int(ph * 0.20), int(pw * 0.92), int(ph * 0.73)))
building_crop.save(os.path.join(output_dir, "facility", "selaqui_plant_exterior.jpg"), quality=92)
print("Saved selaqui_plant_exterior.jpg")

# Page 15 (0-indexed page 14): Annexure-II Product Specifications with product rolls
page15 = doc[14]
pix15 = page15.get_pixmap(dpi=250)
page15_img = Image.frombytes("RGB", [pix15.width, pix15.height], pix15.samples)
p15_w, p15_h = page15_img.size
print(f"Page 15 size: {p15_w}x{p15_h}")

# In Page 15, there are 6 product sections with actual product roll photos on the left:
# Row 1: Aluminium Blister Foil (approx y: 15% - 28%, x: 19% - 47%)
blister_roll = page15_img.crop((int(p15_w * 0.19), int(p15_h * 0.155), int(p15_w * 0.46), int(p15_h * 0.275)))
blister_roll.save(os.path.join(output_dir, "products", "blister_foil_roll.jpg"), quality=92)

# Row 2: Aluminium Strip Foil (approx y: 30% - 42%, x: 19% - 47%)
strip_roll = page15_img.crop((int(p15_w * 0.19), int(p15_h * 0.305), int(p15_w * 0.46), int(p15_h * 0.425)))
strip_roll.save(os.path.join(output_dir, "products", "strip_foil_roll.jpg"), quality=92)

# Row 3: Paper-Aluminium Laminates (approx y: 43% - 55%, x: 19% - 47%)
paper_roll = page15_img.crop((int(p15_w * 0.19), int(p15_h * 0.435), int(p15_w * 0.46), int(p15_h * 0.565)))
paper_roll.save(os.path.join(output_dir, "products", "paper_alu_roll.jpg"), quality=92)

# Row 4: Aluminium Cold Forming Alu-Alu (approx y: 57% - 69%, x: 19% - 47%)
alu_alu_roll = page15_img.crop((int(p15_w * 0.19), int(p15_h * 0.575), int(p15_w * 0.46), int(p15_h * 0.700)))
alu_alu_roll.save(os.path.join(output_dir, "products", "alu_alu_roll.jpg"), quality=92)

# Row 5: Child Resistant (CR Foils) (approx y: 71% - 84%, x: 19% - 47%)
cr_roll = page15_img.crop((int(p15_w * 0.19), int(p15_h * 0.715), int(p15_w * 0.46), int(p15_h * 0.835)))
cr_roll.save(os.path.join(output_dir, "products", "cr_foil_roll.jpg"), quality=92)

print("Saved all product roll images!")
