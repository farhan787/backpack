import { size, space, zIndex } from "@tamagui/themes";
import { createTokens } from "tamagui";

import { color } from "./colors";

export const tokens = createTokens({
  color,
  space,
  size: {
    ...size,
    xs: 12,
    sm: 14,
    base: 16,
    true: 16, // true is always default
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 28,
    "4xl": 32,
    "5xl": 36,
    "6xl": 40,
    borderWidth: 2,
    container: 56,
  },
  zIndex,
  radius: {
    container: 12,
    large: 16,
    medium: 8,
    true: 8, // true is always default
    small: 4,
  },
});

// the colors are tokenized so they can be utilized by the theme
export const lightThemeColors = {
  baseBackgroundL1: tokens.color.lightBaseBackgroundL1,
  baseTextHighEmphasis: tokens.color.lightBaseTextHighEmphasis,
  baseTextMedEmphasis: tokens.color.lightBaseTextMedEmphasis,
  baseIcon: tokens.color.lightBaseIcon,
  baseIconHover: tokens.color.lightBaseIconHover,
  baseIconPress: tokens.color.lightBaseIconPress,
  baseBorderLight: tokens.color.lightBaseBorderLight,
  buttonPrimaryBackground: tokens.color.lightButtonPrimaryBackground,
  buttonPrimaryText: tokens.color.lightButtonPrimaryText,
  buttonSecondaryBackground: tokens.color.lightButtonSecondaryBackground,
  buttonSecondaryText: tokens.color.lightButtonSecondaryText,
  greenText: tokens.color.lightGreenText,
  greenIcon: tokens.color.lightGreenIcon,
  // greenBorder: tokens.color.lightGreenBorder,
  greenBackgroundSolid: tokens.color.lightGreenBackgroundSolid,
  // greenBackgroundTransparent: tokens.color.lightGreenBackgroundTransparent,
  yellowText: tokens.color.lightYellowText,
  yellowIcon: tokens.color.lightYellowIcon,
  // yellowBorder: tokens.color.lightYellowBorder,
  yellowBackgroundSolid: tokens.color.lightYellowBackgroundSolid,
  // yellowBackgroundTransparent: tokens.color.lightYellowBackgroundTransparent,
  redText: tokens.color.lightRedText,
  redIcon: tokens.color.lightRedIcon,
  // redBorder: tokens.color.lightRedBorder,
  redBackgroundSolid: tokens.color.lightRedBackgroundSolid,
  // redBackgroundTransparent: tokens.color.lightRedBackgroundTransparent,
};

export const darkThemeColors = {
  baseBackgroundL1: tokens.color.darkBaseBackgroundL1,
  baseTextHighEmphasis: tokens.color.darkBaseTextHighEmphasis,
  baseTextMedEmphasis: tokens.color.darkBaseTextMedEmphasis,
  baseIcon: tokens.color.darkBaseIcon,
  baseIconHover: tokens.color.darkBaseIconHover,
  baseIconPress: tokens.color.darkBaseIconPress,
  // baseBorderdark: tokens.color.darkBaseBorderLight,
  buttonPrimaryBackground: tokens.color.darkButtonPrimaryBackground,
  buttonPrimaryText: tokens.color.darkButtonPrimaryText,
  buttonSecondaryBackground: tokens.color.darkButtonSecondaryBackground,
  buttonSecondaryText: tokens.color.darkButtonSecondaryText,
  greenText: tokens.color.darkGreenText,
  greenIcon: tokens.color.darkGreenIcon,
  // greenBorder: tokens.color.darkGreenBorder,
  greenBackgroundSolid: tokens.color.darkGreenBackgroundSolid,
  // greenBackgroundTransparent: tokens.color.darkGreenBackgroundTransparent,
  yellowText: tokens.color.darkYellowText,
  yellowIcon: tokens.color.darkYellowIcon,
  // yellowBorder: tokens.color.darkYellowBorder,
  yellowBackgroundSolid: tokens.color.darkYellowBackgroundSolid,
  // yellowBackgroundTransparent: tokens.color.darkYellowBackgroundTransparent,
  redText: tokens.color.darkRedText,
  redIcon: tokens.color.darkRedIcon,
  // redBorder: tokens.color.darkRedBorder,
  redBackgroundSolid: tokens.color.darkRedBackgroundSolid,
  // redBackgroundTransparent: tokens.color.darkRedBackgroundTransparent,
};
