import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const adminEmail = 'osamasadekadam321@gmail.com';
const projects = [
  { slug: 'smart-ip-auditor-engine', title: 'Smart-IP Auditor Engine', tagline: 'AI patent analysis platform using RAG — cut legal review time by 70%.', description: 'A legal-tech platform that leverages Retrieval-Augmented Generation (RAG) to perform semantic similarity analysis across patents and IP documents.', category: 'AI', coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80', techStack: ['RAG', 'OpenAI', 'TypeScript', 'Next.js', 'PostgreSQL', 'Vector DB'], features: ['Semantic similarity search', 'Citation-backed AI answers', '70% reduction in manual legal review', 'Streaming responses'], gallery: [], year: 2025, featured: true, order: 1, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' },
  { slug: 'coommit-echo-ai-canvas', title: 'Coommit Echo — AI Canvas', tagline: 'Real-time collaborative infinite canvas.', description: 'An AI-powered real-time collaborative workspace featuring an infinite canvas, live audio processing, and automated layout generation.', category: 'AI', coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80', techStack: ['Next.js', 'OpenAI', 'Whisper', 'WebSockets', 'TypeScript'], features: ['Infinite canvas', 'Live audio transcription', 'Real-time multi-user sync', 'AI auto-layout'], gallery: [], year: 2025, featured: true, order: 2, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' },
  { slug: 'spotter-ai', title: 'Spotter AI — Logistics Route Calculator', tagline: 'Enterprise route-planning engine.', description: 'An enterprise-grade route planning and fuel stop optimization engine for logistics companies.', category: 'Web', coverImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80', techStack: ['React', 'NestJS', 'PostgreSQL', 'Redis', 'Google Maps API'], features: ['Optimal fuel-stop algorithm', 'Cheapest station detection', '60% efficiency improvement', 'Multi-tenant architecture'], gallery: [], year: 2024, featured: true, order: 3, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' },
  { slug: 'ride-hailing-platform', title: 'Ride-Hailing Platform', tagline: 'Full-stack ride-hailing system.', description: 'A complete ride-hailing platform with rider app, driver app, and admin dashboard.', category: 'Full-Stack', coverImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80', techStack: ['NestJS', 'React', 'PostgreSQL', 'Redis', 'TypeScript'], features: ['Real-time ride matching', 'Live driver tracking', 'Admin dashboard', 'Payment workflow'], gallery: [], year: 2024, featured: true, order: 4, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' },
  { slug: 'electricity-theft-inspection', title: 'Electricity Theft Inspection', tagline: 'Offline-first mobile app.', description: 'A field-ready mobile application for electricity inspectors to record theft incidents offline.', category: 'Mobile', coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80', techStack: ['React Native', 'SQLite', 'Expo'], features: ['100% offline data capture', 'GPS-tagged evidence', 'Background sync', '2h → 15min workflow'], gallery: [], year: 2024, featured: false, order: 5, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' },
  { slug: 'asyut-maintenance-dashboard', title: 'Asyut Maintenance Dashboard', tagline: 'Maintenance tracking with AI assistant.', description: 'A comprehensive web app for managing monthly periodic maintenance work.', category: 'Web', coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80', techStack: ['Next.js', 'PostgreSQL', 'OpenAI'], features: ['Interactive dashboards', 'PDF reports', 'AI assistant', 'Access control'], gallery: [], year: 2025, featured: false, order: 6, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' },
  { slug: 'drawing-course-platform', title: 'Drawing Course Platform', tagline: 'Educational platform + recording studio.', description: 'An interactive educational platform for Engineering Drawing courses with a native recording studio.', category: 'Web', coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80', techStack: ['Python', 'Flask', 'WebRTC'], features: ['Live drawing sessions', 'Native recorder', 'Course management'], gallery: [], year: 2023, featured: false, order: 7, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' },
  { slug: 'fuel-planner', title: 'Fuel Planner', tagline: 'Cheapest fuel stops algorithm.', description: 'A clean algorithmic solution to the classic Fuel Stop Planner problem.', category: 'Automation', coverImage: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1600&q=80', techStack: ['TypeScript', 'Algorithms'], features: ['Optimal-stop algorithm', 'Cheapest detection', '97th percentile score'], gallery: [], year: 2024, featured: false, order: 8, liveUrl: 'https://github.com/Eng-Osama-Sadek', githubUrl: 'https://github.com/Eng-Osama-Sadek' }
];
async function main() {
  console.log('🌱 Seeding database...');
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { isAdmin: true },
    create: { email: adminEmail, name: 'Osama Sadek', isAdmin: true },
  });
  console.log('✅ Admin user: ' + admin.email);
  for (const p of projects) {
    await prisma.project.upsert({
      where: { userId_slug: { userId: admin.id, slug: p.slug } },
      update: { ...p },
      create: { ...p, userId: admin.id },
    });
  }
  console.log('✅ ' + projects.length + ' projects seeded.');
  console.log('🎉 Done!');
}
main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());