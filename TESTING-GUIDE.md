# Testing Guide - UI/UX Improvements

## Quick Start

1. Open `index.html` in a modern browser
2. Test on desktop (1920px), tablet (768px), and mobile (375px)
3. Use the checklist below to verify improvements

---

## Desktop Testing Checklist (1920px+)

### Navigation
- [ ] Hover over nav links → underline slides in from left
- [ ] Hover over "Amora" logo → lifts 1px + color changes
- [ ] Hover over "Schedule a Call" button → lifts + shadow appears
- [ ] Scroll down → navbar gets backdrop blur + shadow

### Hero Section
- [ ] Page loads → background slowly zooms in (10 seconds)
- [ ] Hover over "View the Gallery" button → white fills from bottom + lifts
- [ ] Typography feels refined with proper letter-spacing

### Gallery Cards
- [ ] Hover over card → image scales to 1.06 + title lifts
- [ ] Hover over "View the Gallery →" → arrow slides right
- [ ] Transition feels smooth (0.8s)

### About Preview
- [ ] Hover over section → image slowly scales over 8 seconds
- [ ] Hover over "Get to Know Me" button → fills from bottom + lifts

### Testimonials
- [ ] Hover over card → background tints + image scales
- [ ] Images have subtle grayscale that removes on hover
- [ ] Spacing feels generous (4rem padding)

### Blog Cards
- [ ] Hover over card → entire card lifts 4px
- [ ] Image scales + title changes color
- [ ] Smooth coordinated animation

### Email Signup
- [ ] Section has subtle radial gradient background
- [ ] Form has shadow (elevated feel)
- [ ] Inputs have glass morphism (backdrop-filter)
- [ ] Button lifts on hover with shadow

### CTA Banner
- [ ] Background image visible at 12% opacity with grayscale
- [ ] Radial gradient fade creates depth
- [ ] Button has slide-up fill effect

### Footer
- [ ] Decorative gradient line at top
- [ ] Hover over logo → color changes
- [ ] Hover over links → slide right 3px
- [ ] Spacing feels generous

---

## Tablet Testing Checklist (768px - 1024px)

### Layout
- [ ] Gallery grid: 2 columns
- [ ] Testimonials: Single column with borders
- [ ] Blog grid: 2 columns
- [ ] Footer: 2 columns
- [ ] All spacing scales appropriately

### Interactions
- [ ] All hover states still work
- [ ] Touch targets feel appropriate
- [ ] No horizontal scroll

---

## Mobile Testing Checklist (375px - 767px)

### Navigation
- [ ] Hamburger menu visible (44px × 44px)
- [ ] Tap hamburger → menu slides in with radial gradient background
- [ ] Menu links are 2.8rem (large, readable)
- [ ] Hover/tap link → slides right + underline appears
- [ ] Close button (44px × 44px) rotates 90° on hover

### Touch Targets
- [ ] All buttons minimum 44px height
- [ ] Hamburger button: 44px × 44px
- [ ] Form inputs: Comfortable tap size
- [ ] Links: Easy to tap without mis-taps

### Hero
- [ ] Title scales down appropriately (3.2rem)
- [ ] Content padding: 1.5rem (comfortable)
- [ ] Button is full-width friendly

### Sections
- [ ] Padding: 5rem 1.5rem (comfortable breathing room)
- [ ] Gallery: 2 columns with 2px gap
- [ ] Blog: Single column
- [ ] Testimonials: Single column

### Email Form
- [ ] Stacks vertically
- [ ] Inputs have proper borders on all sides
- [ ] Button is full-width
- [ ] Easy to fill out on mobile

### Footer
- [ ] Single column layout
- [ ] Links easy to tap
- [ ] Copyright stacks vertically

---

## Animation Testing

### Scroll Reveal
1. Scroll down the homepage
2. Elements should fade up (40px) over 1 second
3. Staggered delays on testimonials (0.15s, 0.3s)
4. Smooth, elegant easing

### Hero Fade-up
1. Refresh homepage
2. Elements appear in sequence:
   - Eyebrow (immediate)
   - Title (0.1s delay)
   - Subtitle (0.25s delay)
   - Button (0.4s delay)

### Hover States
1. All hover states should be smooth (0.4s)
2. No jank or stuttering
3. Coordinated animations (image + text together)

---

## Typography Testing

### Hierarchy
- [ ] H1: 3rem - 5.5rem (responsive)
- [ ] H2: 2.5rem - 3.5rem (responsive)
- [ ] Body: 0.9rem - 1rem
- [ ] Letter-spacing: Negative on headings, positive on body
- [ ] Line-height: 1.1-1.2 on headings, 1.8-1.9 on body

### Readability
- [ ] Text feels crisp (antialiased)
- [ ] Proper contrast ratios
- [ ] Comfortable reading line length

---

## Cross-Browser Testing

### Chrome/Edge
- [ ] All animations smooth
- [ ] Backdrop-filter works
- [ ] No visual glitches

### Firefox
- [ ] All animations smooth
- [ ] Backdrop-filter works (or graceful fallback)
- [ ] No visual glitches

### Safari (Desktop)
- [ ] All animations smooth
- [ ] -webkit-backdrop-filter works
- [ ] No visual glitches

### Safari (iOS)
- [ ] Touch interactions work
- [ ] Animations smooth (60fps)
- [ ] No scroll issues

---

## Performance Testing

### Desktop
- [ ] Smooth 60fps animations
- [ ] No layout shift on load
- [ ] Images load progressively

### Mobile
- [ ] Smooth 60fps animations
- [ ] No jank on scroll
- [ ] Touch interactions responsive

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus states visible
- [ ] Logical tab order

### Screen Reader
- [ ] All images have alt text
- [ ] Form labels properly associated
- [ ] Semantic HTML structure

### Touch Targets
- [ ] All interactive elements ≥ 44px × 44px
- [ ] Adequate spacing between tap targets
- [ ] No accidental taps

---

## Visual Regression Checklist

Compare before/after:

### Spacing
- [ ] More generous padding throughout (7rem → 8rem)
- [ ] Consistent spacing system
- [ ] Better vertical rhythm

### Colors
- [ ] Same brand palette maintained
- [ ] Better opacity values
- [ ] Enhanced overlays

### Typography
- [ ] Same fonts (Cormorant Garamond + Jost)
- [ ] Better letter-spacing
- [ ] Improved line-height

### Interactions
- [ ] All existing functionality preserved
- [ ] Enhanced with micro-interactions
- [ ] No broken features

---

## Known Improvements to Verify

1. **Navigation underline**: Should slide in smoothly
2. **Button slide-up**: Should fill from bottom
3. **Card lifts**: Should elevate with shadow
4. **Image scales**: Should be smooth and coordinated
5. **Mobile menu**: Should have radial gradient background
6. **Email form**: Should have glass morphism effect
7. **Typography**: Should feel more refined
8. **Spacing**: Should feel more generous

---

## Bug Testing

### Common Issues to Check
- [ ] No horizontal scroll on any breakpoint
- [ ] No text overflow
- [ ] No broken images
- [ ] No console errors
- [ ] No layout shift on interaction
- [ ] Animations don't cause jank

---

## Final Verification

### Overall Feel
- [ ] Site feels premium and polished
- [ ] Interactions feel intentional
- [ ] Typography feels editorial
- [ ] Spacing feels generous
- [ ] Colors feel cohesive
- [ ] Mobile experience feels native

### Production Ready
- [ ] No errors in console
- [ ] All links work
- [ ] All forms validate
- [ ] All images load
- [ ] All animations smooth
- [ ] All breakpoints tested

---

## Testing Tools

### Recommended
- Chrome DevTools (Responsive mode)
- Firefox Developer Tools
- Safari Web Inspector
- Lighthouse (Performance audit)
- WAVE (Accessibility audit)

### Breakpoints to Test
- 375px (iPhone SE)
- 390px (iPhone 12/13/14)
- 768px (iPad Portrait)
- 1024px (iPad Landscape)
- 1440px (Laptop)
- 1920px (Desktop)

---

## Success Criteria

✅ All hover states work smoothly
✅ All animations are 60fps
✅ Typography feels refined
✅ Spacing feels generous
✅ Mobile experience is polished
✅ Touch targets are ≥ 44px
✅ No console errors
✅ No visual regressions
✅ Site feels premium and production-ready

---

## Report Issues

If you find any issues:
1. Note the browser and viewport size
2. Describe the expected vs actual behavior
3. Include screenshots if possible
4. Check if it's a CSS or JS issue
5. Verify it's not a browser-specific bug

---

## Next Steps

After testing:
1. ✅ Verify all improvements work as expected
2. ✅ Test on real devices (not just DevTools)
3. ✅ Run Lighthouse audit
4. ✅ Run accessibility audit
5. ✅ Get stakeholder approval
6. 🚀 Deploy to production!
