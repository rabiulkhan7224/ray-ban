'use client'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const lenis = new Lenis({

    duration: 1.2, // Adjust for desired smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Example easing function
    lerp: 0.1, // Linear interpolation factor
    smoothWheel: true,
    wheelMultiplier: 1,
})

// Sync Lenis → ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

// Use GSAP ticker as RAF
gsap.ticker.add((time) => {
  lenis.raf(time * 1000) // GSAP time is seconds
})

// Disable lag smoothing
gsap.ticker.lagSmoothing(0)
