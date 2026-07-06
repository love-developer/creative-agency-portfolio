import { Project, CaseStudy, ServiceItem, TeamMember, BlogArticle, Award, CareerPosition } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'lumina-spatial',
    title: 'LUMINA SPATIAL',
    client: 'Lumina Inc.',
    category: 'Spatial UI / WebXR',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=90',
    description: 'An interactive, atmospheric 3D environment exploring spatial user interfaces for next-generation virtual reality hardware.',
    tags: ['WebXR', 'Three.js', 'Creative Direction', 'Interaction Design'],
    color: 'from-fuchsia-600 to-indigo-600',
    featured: true
  },
  {
    id: 'chronos-protocol',
    title: 'CHRONOS PROTOCOL',
    client: 'Chronos Labs',
    category: 'Branding / Immersive Web',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=90',
    description: 'A revolutionary brand identity and generative particle portal for a blockchain-based temporal consensus protocol.',
    tags: ['Generative Art', 'Identity', 'WebGL', 'Web3'],
    color: 'from-cyan-500 to-blue-600',
    featured: true
  },
  {
    id: 'vertex-monolith',
    title: 'VERTEX MONOLITH',
    client: 'Vertex Arch',
    category: 'Digital Twin / Architecture',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
    description: 'A responsive digital twin experiencing interactive brutalist architecture with real-time shadow projection.',
    tags: ['Digital Twin', 'Three.js', 'UI Architecture', 'Atmospheric Physics'],
    color: 'from-amber-500 to-rose-600',
    featured: true
  },
  {
    id: 'orion-sound',
    title: 'ORION ATMOSPHERICS',
    client: 'Orion Acoustics',
    category: 'Audio Experience / 3D Canvas',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=90',
    description: 'Synthesizing ambient digital soundscapes into interactive visual frequency arrays, allowing users to sculpt sound.',
    tags: ['Web Audio API', 'Canvas 2D', 'Algorithmic Music', 'Minimalism'],
    color: 'from-emerald-500 to-teal-700',
    featured: false
  },
  {
    id: 'hyperion-kinetic',
    title: 'HYPERION KINETIC',
    client: 'Hyperion Motor Group',
    category: 'E-Commerce / Kinetic UI',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=90', // placeholder with high contrast
    description: 'Redefining the digital showroom with seamless 60fps scrolling choreography, physical interaction triggers, and dynamic liquid shaders.',
    tags: ['Kinetic Typography', 'High Performance', 'Shaders', 'Premium UI'],
    color: 'from-purple-600 to-pink-600',
    featured: false
  }
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'lumina-spatial': {
    id: 'lumina-spatial',
    project: PROJECTS[0],
    challenge: 'Lumina Inc. wanted to demonstrate the potential of Spatial Computing on standard web browsers. The main challenge was to achieve console-grade visual fidelity, fluid 90fps interactions, and intuitive gesture controls without requiring external hardware or bulky downloads.',
    solution: 'We engineered a customized, shader-based physics pipeline using Three.js and custom GLSL vertex modifiers. By rendering volumetric lighting directly in a fragment shader and mapping hand-tracking APIs to standard touch/cursor vectors, we built an atmospheric playground that feels physical, deep, and beautifully tactile.',
    results: [
      'Over 1.2M unique interactive sessions within the first week of launch.',
      'Featured on the front page of Awwwards, FWA, and CSS Design Awards.',
      'Average user dwell time spiked from 45 seconds to over 6.8 minutes.',
      'Won Gold at the Webby Awards for Best Experimental Web Experience.'
    ],
    metrics: [
      { label: 'Dwell Time Boost', value: '+800%' },
      { label: 'Page Views', value: '4.2M' },
      { label: 'Render Latency', value: '1.2ms' },
      { label: 'D&AD Pencils', value: '2' }
    ],
    process: [
      { step: '01', title: 'Atmospheric Research', description: 'Deep-diving into physical lighting, refraction indexes, and spatial UI ergonomics to understand how elements should scale in 3D.' },
      { step: '02', title: 'Kinetic Prototyping', description: 'Testing tactile feedback systems, physics-based springs, and mouse-following orbits using math-based easing profiles.' },
      { step: '03', title: 'GLSL Custom Shaders', description: 'Writing bespoke vertex and fragment shaders to handle chrome-like liquid refractions, chromatic aberrations, and noise-driven displacement waves.' },
      { step: '04', title: 'Sonic Sculpting', description: 'Integrating Web Audio synthesizers triggered by scroll position and interactive hover states to complete the sensory loop.' }
    ],
    quote: {
      text: 'Aether pushed the boundaries of what we thought was possible on the browser. They did not just build a landing page; they designed a gateway to the next era of spatial interactions.',
      author: 'Marcus Vance',
      role: 'VP of Product at Lumina Inc.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  'chronos-protocol': {
    id: 'chronos-protocol',
    project: PROJECTS[1],
    challenge: 'Chronos Labs requested an interface that could demystify complex high-speed blockchain state consensus. Normal crypto dashboards look sterile, cluttered, and clinical. The goal was to translate raw cryptography into high-art, flowing digital sand.',
    solution: 'We mapped block validation events to a generative GPU particle simulation. Using custom vector fields and simplex noise, each block is compiled as a swirling nebula. When a validator confirms a block, the sand is sucked into a central singularity via an elegant gravitational pull.',
    results: [
      'Increased testnet signups by 340% during the interactive campaign.',
      'Awwwards Site of the Month runner-up.',
      'Praised by design and tech communities worldwide for sensory translation of complex data.'
    ],
    metrics: [
      { label: 'Testnet Growth', value: '+340%' },
      { label: 'Social Shares', value: '45K' },
      { label: 'Active Sand Nodes', value: '250K' },
      { label: 'Site Performance', value: '100%' }
    ],
    process: [
      { step: '01', title: 'Mathematical Mapping', description: 'Translating live blockchain transaction hashes into specific vector forces, velocity constants, and particle color ranges.' },
      { step: '02', title: 'GPU Simulation', description: 'Offloading particle calculation to custom fragment shaders, allowing the rendering of up to 250,000 individual particles smoothly at 60fps.' },
      { step: '03', title: 'Sonic Synthesis', description: 'Configuring low-frequency sine waves that modulate in real-time as particle clusters coalesce and split.' }
    ],
    quote: {
      text: 'Aether turned raw cryptographic transactions into a living, breathing symphony of sand. Absolutely breathtaking craftsmanship.',
      author: 'Elena Rostova',
      role: 'Chief Architect, Chronos Labs'
    },
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ]
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'spatial-direction',
    iconName: 'Sparkles',
    title: 'Creative & Spatial Direction',
    shortDesc: 'Sculpting cinematic digital universes that align high-concept brand strategy with bleeding-edge technology.',
    longDesc: 'We don’t believe in templated modules. We work with progressive brands to define high-contrast visual languages, micro-interaction guidelines, and conceptual foundations that break standard design conventions and captivate audiences.',
    deliverables: ['Brand Storytelling Architecture', 'Atmospheric Identity Systems', 'Spatial Experience Strategy', 'Interactivity Design Handbooks'],
    technologies: ['Figma Studio', 'Cinema 4D', 'Stable Diffusion API', 'Generative Color Space']
  },
  {
    id: 'frontend-craftsmanship',
    iconName: 'Cpu',
    title: 'Creative Frontend Engineering',
    shortDesc: 'Implementing high-performance interactive portals with flawless frame rates, custom shaders, and physics engines.',
    longDesc: 'We bridge the gap between design and high-performance system programming. Our engineering squad specializes in custom GLSL shaders, complex SVG layouts, high-rate canvas pipelines, and smooth scroll choreography that delivers seamless 60fps experiences.',
    deliverables: ['Responsive WebGL Engines', 'Bespoke CSS Animation Libraries', 'Rich Vector Choreography', 'Performance Tuning (95+ Lighthouse)'],
    technologies: ['Vite + React', 'Three.js / React Three Fiber', 'Motion / GSAP Core', 'GLSL Custom Shaders']
  },
  {
    id: 'sensory-design',
    iconName: 'Volume2',
    title: 'Bespoke Audio & Sensory Design',
    shortDesc: 'Crafting immersive soundscapes and dynamic Web Audio systems that make web interfaces feel physical.',
    longDesc: 'Interfaces shouldn’t be mute. We design high-end, synthetic audio responses (clicks, swells, echoes, and custom soundscapes) that respond to user mouse gestures, scroll velocities, and state shifts, elevating standard UX into a multi-sensory art form.',
    deliverables: ['Web Audio API Synthesizers', 'Dynamic Ambience Loops', 'Sonic Haptic Responses', 'Interactive Audio Systems'],
    technologies: ['Web Audio API', 'Algorithmic Synthesizers', 'Binaural Pan Systems', 'DSP Filters']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'silas-vance',
    name: 'SILAS VANCE',
    role: 'Principal Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialty: 'Futuristic Typographies & Spatial Systems',
    quote: 'Design isn’t about solving problems that exist. It is about dreaming of systems that make yesterday’s problems completely obsolete.',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' },
    favoriteTool: 'Custom Bezier Curves'
  },
  {
    id: 'amara-chen',
    name: 'AMARA CHEN',
    role: 'Chief of Frontend Engineering',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specialty: 'GLSL Shaders & Matrix Optimizations',
    quote: 'If an animation drops a single frame, we rewrite the underlying coordinate system. No excuses. Everything must flow like warm glass.',
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com' },
    favoriteTool: 'Raw WebGL / GLSL'
  },
  {
    id: 'leon-fischer',
    name: 'LEON FISCHER',
    role: 'Lead Atmospheric Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialty: 'Acoustics & Generative Particle Environments',
    quote: 'Sound completes the visual. Without spatial audio, an interface is just a glowing spreadsheet. Let there be waves.',
    socials: { twitter: 'https://twitter.com', github: 'https://github.com' },
    favoriteTool: 'Web Audio Oscillators'
  },
  {
    id: 'sarah-jenkins',
    name: 'SARAH JENKINS',
    role: 'Interactive Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    specialty: 'Responsive Ergonomics & Spatial Sagas',
    quote: 'A layout is a musical score. The margins are silences, and the buttons are crescendos. We conduct the orchestra of focus.',
    socials: { instagram: 'https://instagram.com', linkedin: 'https://linkedin.com' },
    favoriteTool: 'CSS Grid & Negative Space'
  }
];

export const BLOGS: BlogArticle[] = [
  {
    id: 'sculpting-silence',
    title: 'Sculpting Silence: The Case for Interactive Acoustics in Web Design',
    excerpt: 'Why standard websites are mute, and how we can use the Web Audio API to create immersive physical haptics that delight users.',
    content: `For decades, the web has been treated as a silent medium. We spend millions of dollars calibrating screen pixels, choosing brand typefaces, and tuning high-frequency displays, but we let our users interact in absolute silence.

    But humans do not navigate a silent world. In reality, sound provides some of our most critical structural feedback: the hollow clink of a key, the satisfying swoosh of a sliding door, the rustle of a page. Without sound, interactive interfaces feel cold, distant, and synthetic.
    
    In this article, we outline our design philosophy for browser soundscapes. We explore how to generate organic, non-disruptive feedback frequencies using standard oscillators, how to compress audio waves dynamically to prevent acoustic fatigue, and how to synchronize audios with custom CSS frame transformations.`,
    category: 'SENSORY UX',
    readTime: '4 MIN READ',
    date: 'JUN 24, 2026',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    author: { name: 'Leon Fischer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' }
  },
  {
    id: 'glsl-future',
    title: 'Breaking the Viewport: WebGL Custom Shaders and Volumetric Light',
    excerpt: 'Diving deep into fragment shaders, chrome glass refraction formulas, and fluid physics simulation directly inside standard web viewports.',
    content: `The modern flat layout is reaching its limits. As display hardware achieves breathtaking refresh rates and infinite contrast ratios, standard grid designs are beginning to look incredibly repetitive. 
    
    To truly stand out, we must think in three dimensions. By injecting custom GLSL fragment shaders directly into standard HTML canvas backdrops, we can achieve volumetric shadows, real-time light refraction, and interactive liquid dispersion effects that were once reserved for high-end movie studios.
    
    We break down our rendering loop, demonstrating how to use simplex noise to simulate realistic fluid waves, and how to keep render times below 1.5 milliseconds to secure consistent 60fps states on older mobile hardware.`,
    category: 'ENGINEERING',
    readTime: '6 MIN READ',
    date: 'MAY 18, 2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    author: { name: 'Amara Chen', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }
  },
  {
    id: 'brutalist-ergonomics',
    title: 'The Paradox of Brutalism: High Art vs. Seamless Usability',
    excerpt: 'How we marry bold, rule-breaking layouts, massive typography, and high-contrast lines with absolute, intuitive, and accessible UX.',
    content: `Many designers believe that brutalist design is inherently hostile to usability. They point to tiny text, invisible buttons, flashing neon frames, and broken scrollbars. 
    
    But this is a misunderstanding of brutalism. True brutalism is about raw materials, honest geometry, and the absolute removal of visual fluff. When combined with rigorous user testing, it creates some of the most usable layouts because there is no noise to compete with the central actions.
    
    In this guide, we show how we use large typography to organize information hierarchies, how we establish safe touch points, and why negative space is our most effective design tool.`,
    category: 'CREATIVE DESIGN',
    readTime: '5 MIN READ',
    date: 'APR 09, 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    author: { name: 'Silas Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' }
  }
];

export const AWARDS: Award[] = [
  { id: 'awwwards-site-of-the-month', title: 'Site of the Month', category: 'Best Creative UX', project: 'Lumina Spatial', year: '2026', platform: 'Awwwards' },
  { id: 'fwa-of-the-day', title: 'FWA of the Day', category: 'Experimental WebGL', project: 'Chronos Protocol', year: '2026', platform: 'FWA' },
  { id: 'cssda-best-ui', title: 'Best UI / UX Design', category: 'Agency of the Year (Nominee)', project: 'Aether Digital', year: '2025', platform: 'CSSDA' },
  { id: 'webby-gold', title: 'Gold Webby Award', category: 'Experimental Web Experience', project: 'Lumina Spatial', year: '2026', platform: 'Webby' }
];

export const CAREERS: CareerPosition[] = [
  {
    id: 'glsl-engineer',
    title: 'Lead GLSL & WebGL Engineer',
    department: 'Creative Engineering',
    location: 'Remote / Amsterdam Studio',
    type: 'Full-Time',
    description: 'We are looking for a math-minded wizard who can sculpt raw pixels and construct immersive 3D simulations that run flawlessly in standard browser viewports.',
    requirements: [
      'Expert level knowledge of WebGL, Three.js, and custom fragment/vertex GLSL shaders.',
      'Strong grasp of physical matrix math, spring vectors, and fluid dynamics equations.',
      'Deep passion for pixel-perfect performance profiling and keeping render timelines under 2.5ms.',
      'A portfolio of avant-garde visual web projects.'
    ]
  },
  {
    id: 'interactive-designer',
    title: 'Senior Interactive Designer',
    department: 'Design Studio',
    location: 'Tokyo Office / Hybrid',
    type: 'Full-Time',
    description: 'Help us design high-contrast typography grids, custom interactive states, and physical digital frameworks that challenge standard desktop paradigms.',
    requirements: [
      '5+ years of designing high-end digital applications or brand portfolios.',
      'Absolute mastery of typography scale, micro-spacing rhythm, and layout tension.',
      'Excellent prototyping skills, with experience in interactive transitions and motion curves.',
      'Strong collaborative energy working directly with creative software engineers.'
    ]
  },
  {
    id: 'sonic-architect',
    title: 'Web Audio Synthesizer Designer',
    department: 'Sensory Lab',
    location: 'Remote',
    type: 'Contract / Project-Based',
    description: 'Join our sensory research lab to create custom audio response profiles and generative ambient algorithms triggered directly by client mouse coordinates.',
    requirements: [
      'Deep familiarity with Web Audio API nodes: Oscillators, GainNode, ConvolverNode, and BiquadFilterNode.',
      'Experience in sound engineering, synthesizers, and creating organic micro-feedback audios.',
      'Basic React/JS skills to implement audio loops directly into component structures.'
    ]
  }
];

export const FAQS = [
  {
    question: "Do you build custom WebGL engines from scratch?",
    answer: "Yes. While we leverage Three.js or PixiJS for scene graphs and base geometries, we write raw WebGL and custom GLSL fragment shaders for all refractive surfaces, water simulations, particle networks, and specialized lighting models to maximize visual speed and uniqueness."
  },
  {
    question: "How do you ensure immersive websites run smoothly on mobile devices?",
    answer: "Performance is our absolute religion. We implement multi-tier rendering profiles. On mobile devices, we dynamically reduce active particle counts, simplify complex GLSL noise equations, disable high-frequency refraction overlays, and rely on GPU-accelerated CSS transformations to preserve battery life and lock in a steady 60fps experience."
  },
  {
    question: "What is your typical development timeframe for a bespoke portal?",
    answer: "A true Awwwards-level project requires significant design, mathematical testing, sonic modeling, and interactive choreography. Our standard engagements range from 8 to 16 weeks from initial core strategy to final pixel-perfect fine-tuning."
  },
  {
    question: "Can we integrate your immersive experiences with our existing CMS?",
    answer: "Absolutely. We build headless frontend architectures. We wrap our complex WebGL canvases and interactive elements in standard React components that fetch structural content from headless platforms like Sanity, Contentful, or custom secure APIs."
  }
];
