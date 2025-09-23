import { useTheme } from "./ThemeProvider";
import lightLogo from 'figma:asset/eb1ae5783e884e95dae9dce52ef5ef950570183b.png';
import darkLogo from 'figma:asset/c6acca56df1fb9bf7bfc0d7146cc4d8129718e27.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 120, height = 40 }: LogoProps) {
  const { theme, systemTheme } = useTheme();
  
  // Determine current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  
  return (
    <div className={`relative ${className}`}>
      {/* Light theme logo - الملون الكامل */}
      <ImageWithFallback
        src={darkLogo}
        alt="إنكود - Encode"
        className={`w-auto transition-opacity duration-500 ${
          isDark ? 'opacity-0 absolute inset-0' : 'opacity-100'
        }`}
        style={{ width, height, objectFit: 'contain' }}
      />
      
      {/* Dark theme logo - الأبيض */}
      <ImageWithFallback
        src={lightLogo}
        alt="إنكود - Encode"
        className={`w-auto transition-opacity duration-500 ${
          isDark ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
        style={{ width, height, objectFit: 'contain' }}
      />
    </div>
  );
}