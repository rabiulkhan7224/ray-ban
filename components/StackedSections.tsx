// 'use client'

// import { useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { SplitText } from 'gsap/dist/SplitText'
// import { useGSAP } from '@gsap/react'
// import { sections } from '@/lib/data'

// gsap.registerPlugin(ScrollTrigger, SplitText)

// export default function StackedSections() {
//   const container = useRef<HTMLDivElement>(null)

//   useGSAP(
//     () => {
//       const sectionEls = gsap.utils.toArray<HTMLElement>('.stack-section')
//       const splitRefs: SplitText[] = []

//       sectionEls.forEach((section) => {
//         const bg = section.querySelector('.bg')
//         const headline = section.querySelector('h1')
//         const paragraph = section.querySelector('p')
//         if (!bg || !headline || !paragraph) return

//         // 🔹 Split headline into lines
//         const split = new SplitText(headline, { type: 'words,chars,lines' })
//         splitRefs.push(split)
//         const lines = split.lines

//         // 🔹 Pin the section (stacked)
//         ScrollTrigger.create({
//           trigger: section,
//           start: 'top top',
//           end: '+=100%',
//           pin: true,
//           pinSpacing: false
//         })

//         // 🔹 Background parallax + blur
//         gsap.fromTo(
//           bg,
//           { scale: 1.1, filter: 'blur(0px)', opacity: 0.8 },
//           {
//             scale: 1,
//             filter: 'blur(6px)',
//             opacity: 1,
//             ease: 'power1.out',
//             scrollTrigger: {
//               trigger: section,
//               start: 'top top',
//               end: 'bottom top',
//               scrub: true
//             }
//           }
//         )

//         // 🔹 Headline enter animation
//         gsap.fromTo(
//          lines,
//           { y: 80, opacity: 0, filter: 'blur(4px)' },
//           {
//             y: 0,
//             opacity: 1,
//             filter: 'blur(0px)',
//             stagger: 0.05,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: section,
//               start: 'top 80%',
//               end: 'top 50%',
//               scrub: true
//             }
//           }
//         )

//         // 🔹 Headline exit animation
//         gsap.to(lines, {
//           y: -80,
//           opacity: 0,
//           filter: 'blur(4px)',
//           stagger: 0.03,
//           ease: 'power3.in',
//           scrollTrigger: {
//             trigger: section,
//             start: 'bottom 80%',
//             end: 'bottom top',
//             scrub: true
//           }
//         })

//         // 🔹 Paragraph text enter/exit
//         gsap.fromTo(
//           paragraph,
//           { y: 50, opacity: 0, filter: 'blur(2px)' },
//           {
//             y: 0,
//             opacity: 1,
//             filter: 'blur(0px)',
//             scrollTrigger: {
//               trigger: section,
//               start: 'top 75%',
//               end: 'top 55%',
//               scrub: true
//             }
//           }
//         )
//         gsap.to(paragraph, {
//           y: -50,
//           opacity: 0,
//           filter: 'blur(2px)',
//           scrollTrigger: {
//             trigger: section,
//             start: 'bottom 75%',
//             end: 'bottom top',
//             scrub: true
//           }
//         })
//       })

//       return () => {
//         // Cleanup SplitText instances on unmount
//         splitRefs.forEach((split) => split.revert())
//       }
//     },
//     { scope: container }
//   )

//   return (
//     <div ref={container}>
//       {sections.map((s, i) => (
//         <section
//           key={s.id}
//           id={`section-${i + 1}`}
//           className="stack-section relative h-screen w-screen mx-auto flex items-center bg-black "
//         >
//           {/* background */}
//           <div
//             className="bg absolute inset-0 bg-cover bg-center will-change-transform bg-repeat-no-repeat"
//             style={{ backgroundImage: `url(${s.bg})` }}
//           />

//           {/* dark overlay */}
//           <div className="absolute inset-0 " />

//           {/* text */}
//           <div className="relative z-10 px-6 md:px-20 max-w-3xl">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4">
//               {s.title}
//             </h1>
//             <p className="text-sm md:text-lg text-white">{s.text}</p>
//           </div>
//         </section>
//       ))}
//     </div>
//   )
// }


'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import { sections } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function SectionsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const splitRefs = useRef<SplitText[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const sectionEls = gsap.utils.toArray<HTMLElement>('.section')

    sectionEls.forEach((section) => {
      const bg = section.querySelector('.bg') as HTMLElement
      const headline = section.querySelector('h1') as HTMLElement
      const paragraph = section.querySelector('p') as HTMLElement

      if (!bg || !headline || !paragraph) return

      // ✅ Split headline into lines
      const split = new SplitText(headline, { type: 'lines' })
      splitRefs.current.push(split)
      const lines = split.lines

      // Timeline for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section ,
            start: 'top 70%',
            end: 'bottom 20%',

          scrub: 0.5,            // smooth sync to scroll
        }
      })

      // Background parallax + blur
      tl.fromTo(
        bg,

        { scale: 1.1, filter: 'blur(0px)', opacity: 0.9 },
        { scale: 1, filter: 'blur(6px)', opacity: 1, ease: 'power1.out' },
        0
      )

      // Headline enters from bottom (staggered per line)
      tl.fromTo(
        lines,
        
        { y: 100, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.1, ease: 'power3.out' },
        0.1
      )

      // Headline exits upward
      tl.to(
        lines,
        { y: -100, opacity: 0, filter: 'blur(10px)', stagger: 0.05, ease: 'power3.in' },
        0.6
      )

      // Paragraph enters slightly after headline
      tl.fromTo(
        paragraph,
        { y: 50, x: 40, opacity: 0, filter: 'blur(3px)' },
        { y: 0, opacity: 1, x: 0, filter: 'blur(0px)', ease: 'power3.out' },
        0.6
      )

      // Paragraph exits upward
      tl.to(
        paragraph,
        { y: -50, opacity: 0, filter: 'blur(3px)', ease: 'power3.in' },
        
      )
    })

    // Cleanup SplitText on unmount
    return () => splitRefs.current.forEach((split) => split.revert())
  }, [])

  return (
    <div ref={containerRef}>
      {sections.map((s) => (
        <section
          key={s.id}
          className="section relative h-screen flex items-center  "
        >
          {/* Background */}
          <div
            className="bg absolute inset-0 bg-cover bg-center h-screen will-change-transform z-0"
            style={{ backgroundImage: `url(${s.bg})` }}
          />

     

          {/* Content */}
          <div className="relative z-10 px-6 md:px-20 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 leading-tight">
              {s.title}
            </h1>
            <p className="text-sm md:text-lg text-white">{s.text}</p>
          </div>
        </section>
      ))}
    </div>
  )
}

