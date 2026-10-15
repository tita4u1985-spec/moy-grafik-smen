/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#4B343C',
    tint: '#C7647D',

    // Core surfaces
    background: '#FFF7F8',
    foreground: '#4B343C',

    // Cards / elevated surfaces
    card: '#FFFFFF',
    cardForeground: '#4B343C',

    // Primary action color (buttons, links, active states)
    primary: '#C7647D',
    primaryForeground: '#FFFFFF',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#F8E9EC',
    secondaryForeground: '#6E4C57',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#F5ECEE',
    mutedForeground: '#9A7F87',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#FCE8ED',
    accentForeground: '#8D465B',

    // Destructive actions (delete, error states)
    destructive: '#C7525C',
    destructiveForeground: '#FFFFFF',

    // Borders and input outlines
    border: '#F0DDE2',
    input: '#EAD6DC',

    // Day-type colors
    workDay: '#F8D7DF',
    workDayForeground: '#A34E66',
    offDay: '#E0F0E5',
    offDayForeground: '#557660',
    otherDay: '#FBEFCE',
    otherDayForeground: '#8A6C31',
  },

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 20,
};

export default colors;
