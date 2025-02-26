import { NextResponse } from 'next/server'

// Dummy data generator
const generateDummyJobs = () => {
  const jobs = []
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
    'Java', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL',
    'Vue.js', 'Angular', 'Flutter', 'React Native', 'iOS',
    'Android', 'Machine Learning', 'DevOps', 'UI/UX', 'Figma'
  ]
  
  const clients = [
    { name: 'Tech Solutions Inc.', rating: 4.8 },
    { name: 'Digital Innovations', rating: 4.9 },
    { name: 'Future Systems', rating: 4.7 },
    { name: 'Creative Labs', rating: 4.6 },
    { name: 'Global Software', rating: 4.9 }
  ]

  const titles = [
    'Full Stack Developer for E-commerce Platform',
    'Mobile App Developer for Health Tech Startup',
    'Frontend Developer for Dashboard UI',
    'Backend Developer for API Development',
    'DevOps Engineer for Cloud Infrastructure',
    'UI/UX Designer for Mobile App',
    'React Native Developer for Cross-platform App',
    'Machine Learning Engineer for Data Analysis',
    'Blockchain Developer for NFT Platform',
    'Security Engineer for FinTech Platform'
  ]

  for (let i = 0; i < 10; i++) {
    const randomSkills = skills
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 4) + 2)

    const randomClient = clients[Math.floor(Math.random() * clients.length)]
    const randomTitle = titles[Math.floor(Math.random() * titles.length)]
    
    const postedDate = new Date()
    postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 7))
    
    const deadlineDate = new Date()
    deadlineDate.setDate(deadlineDate.getDate() + Math.floor(Math.random() * 30) + 7)

    jobs.push({
      id: `job-${i + 1}`,
      title: randomTitle,
      description: `We are looking for an experienced ${randomTitle.split(' ')[0]} to join our team. The ideal candidate will have strong experience in ${randomSkills.join(', ')}. This is a challenging role that offers great opportunities for professional growth.`,
      budget: Math.floor(Math.random() * 15000) + 5000,
      skills: randomSkills,
      postedAt: postedDate.toISOString(),
      deadline: deadlineDate.toISOString(),
      clientName: randomClient.name,
      clientRating: randomClient.rating
    })
  }

  return jobs
}

export async function GET() {
  const jobs = generateDummyJobs()
  return NextResponse.json(jobs)
}