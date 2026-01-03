"""
Profile Image Preparation Script
This script helps crop and optimize your profile image for the portfolio website.
"""

from PIL import Image
import os
import sys

def crop_image_to_square(input_path, output_path, size=800):
    """
    Crop image to a square and resize for professional portfolio use.
    
    Args:
        input_path: Path to input image
        output_path: Path to save cropped image
        size: Output size in pixels (default 800x800)
    """
    try:
        # Open the image
        img = Image.open(input_path)
        print(f"Original image size: {img.size}")
        
        # Get dimensions
        width, height = img.size
        
        # Calculate crop box to make it square (center crop)
        if width > height:
            # Landscape: crop width
            left = (width - height) // 2
            top = 0
            right = left + height
            bottom = height
        else:
            # Portrait or square: crop height
            left = 0
            top = (height - width) // 2
            right = width
            bottom = top + width
        
        # Crop to square
        img_cropped = img.crop((left, top, right, bottom))
        print(f"Cropped to square: {img_cropped.size}")
        
        # Resize to target size (high quality)
        img_resized = img_cropped.resize((size, size), Image.Resampling.LANCZOS)
        print(f"Resized to: {img_resized.size}")
        
        # Convert to RGB if necessary (for JPG)
        if img_resized.mode in ('RGBA', 'LA', 'P'):
            # Create white background
            rgb_img = Image.new('RGB', img_resized.size, (255, 255, 255))
            if img_resized.mode == 'P':
                img_resized = img_resized.convert('RGBA')
            rgb_img.paste(img_resized, mask=img_resized.split()[-1] if img_resized.mode == 'RGBA' else None)
            img_resized = rgb_img
        
        # Save with high quality
        img_resized.save(output_path, 'JPEG', quality=95, optimize=True)
        print(f"✅ Image saved successfully to: {output_path}")
        
        # Also create a smaller version for web (400x400 for actual use)
        img_web = img_resized.resize((400, 400), Image.Resampling.LANCZOS)
        web_path = output_path.replace('.jpg', '_web.jpg')
        img_web.save(web_path, 'JPEG', quality=90, optimize=True)
        print(f"✅ Web-optimized version saved to: {web_path}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error processing image: {str(e)}")
        return False

def main():
    print("=" * 60)
    print("Profile Image Preparation Tool")
    print("=" * 60)
    print()
    
    # Check if input path provided
    if len(sys.argv) > 1:
        input_path = sys.argv[1]
    else:
        input_path = input("Enter the path to your image file: ").strip().strip('"')
    
    # Check if file exists
    if not os.path.exists(input_path):
        print(f"❌ Error: File not found at '{input_path}'")
        print("\nPlease provide the full path to your image file.")
        return
    
    # Determine output path
    images_dir = os.path.join(os.path.dirname(__file__), 'images')
    os.makedirs(images_dir, exist_ok=True)
    output_path = os.path.join(images_dir, 'profile.jpg')
    
    print(f"\n📸 Processing image...")
    print(f"Input: {input_path}")
    print(f"Output: {output_path}")
    print()
    
    # Process the image
    success = crop_image_to_square(input_path, output_path)
    
    if success:
        print("\n" + "=" * 60)
        print("✅ SUCCESS! Your profile image is ready!")
        print("=" * 60)
        print(f"\nThe image has been saved to: {output_path}")
        print("It will automatically appear on your website.")
        print("\n💡 Tip: The image is cropped to a perfect square")
        print("   and optimized for web use.")
    else:
        print("\n❌ Failed to process image. Please check the error above.")

if __name__ == "__main__":
    # Check if PIL is installed
    try:
        import PIL
    except ImportError:
        print("❌ PIL (Pillow) library is not installed.")
        print("\nTo install it, run:")
        print("  pip install Pillow")
        sys.exit(1)
    
    main()




