import { Button } from "@/components/ui/button"
import { BriefcaseIcon, SearchIcon, StarIcon, QuoteIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the Perfect Freelancer for Your Project
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with skilled professionals, manage projects efficiently, and get work done seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">
                <BriefcaseIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Browse Projects
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/freelancers">
                <SearchIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Find Freelancers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bantu?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
              <SearchIcon className="h-12 w-12 mb-4 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Find Top Talent</h3>
              <p className="text-muted-foreground">
                Access a global network of skilled professionals ready to bring your projects to life.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
              <BriefcaseIcon className="h-12 w-12 mb-4 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Quality Work</h3>
              <p className="text-muted-foreground">
                Get high-quality deliverables from experienced freelancers across various domains.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
              <StarIcon className="h-12 w-12 mb-4 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Enjoy peace of mind with our secure payment system and milestone-based releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found exceptional talent through our platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Sarah Chen"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground">Tech Startup Founder</p>
                </div>
              </div>
              <QuoteIcon className="h-6 w-6 text-primary/20 mb-2" aria-hidden="true" />
              <p className="text-muted-foreground">
                "Found an amazing developer through Bantu who turned our idea into reality. The quality of talent here is exceptional!"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Mark Thompson"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Mark Thompson</h4>
                  <p className="text-sm text-muted-foreground">Marketing Director</p>
                </div>
              </div>
              <QuoteIcon className="h-6 w-6 text-primary/20 mb-2" aria-hidden="true" />
              <p className="text-muted-foreground">
                "The freelancers on Bantu are professional and reliable. Our projects are always delivered on time and within budget."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  alt="Emily Rodriguez"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Emily Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </div>
              </div>
              <QuoteIcon className="h-6 w-6 text-primary/20 mb-2" aria-hidden="true" />
              <p className="text-muted-foreground">
                "The platform makes it easy to find and collaborate with talented freelancers. Highly recommended!"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/testimonials">
                Read More Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}