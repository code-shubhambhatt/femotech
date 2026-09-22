import os
from PIL import Image

output_dir = r"c:\Users\DELL\Coding\Freelance\public\images\facility"
uploaded_dir = r"C:\Users\DELL\.gemini\antigravity-ide\brain\d6f35e85-f752-4052-8bb2-723378bf547f\.user_uploaded"

# 1. Rotogravure Press: crop purely the machine
press_src = os.path.join(uploaded_dir, "media_1790101194561.jpg")
if os.path.exists(press_src):
    img = Image.open(press_src)
    w, h = img.size
    # Machine is in the left section (x: 0 to 0.28*w, y: 0.05*h to 0.58*h)
    pure_press = img.crop((0, int(h * 0.05), int(w * 0.28), int(h * 0.58)))
    pure_press.save(os.path.join(output_dir, "rotogravure_press.jpg"), quality=95)
    print("Pure rotogravure press cropped successfully!")

# 2. Rewinding Machine: crop purely the machine without the top nav bar
rewind_src = os.path.join(uploaded_dir, "media_1790101194550.jpg")
if os.path.exists(rewind_src):
    img = Image.open(rewind_src)
    w, h = img.size
    # Crop below the top header
    pure_rewind = img.crop((int(w * 0.03), int(h * 0.23), int(w * 0.97), int(h * 0.96)))
    pure_rewind.save(os.path.join(output_dir, "rewinding_machine.jpg"), quality=95)
    print("Pure rewinding machine cropped successfully!")
