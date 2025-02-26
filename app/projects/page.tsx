"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, BriefcaseIcon } from "lucide-react"

interface Job {
  id: string
  title: string
  description: string
  budget: number
  skills: string[]
  postedAt: string
  deadline: string
  clientName: string
  clientRating: number
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])

  useEffect(() => {
    // Fetch dummy jobs data
    const fetchJobs = async () => {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setJobs(data)
      setFilteredJobs(data)
    }
    fetchJobs()
  }, [])

  useEffect(() => {
    let filtered = [...jobs]

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Apply sorting
    switch (sortBy) {
      case "recent":
        filtered.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime())
        break
      case "budget-high":
        filtered.sort((a, b) => b.budget - a.budget)
        break
      case "budget-low":
        filtered.sort((a, b) => a.budget - b.budget)
        break
      case "deadline":
        filtered.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
        break
    }

    setFilteredJobs(filtered)
  }, [searchQuery, sortBy, jobs])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-96">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" strokeWidth={2} aria-hidden="true" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="budget-high">Highest Budget</SelectItem>
            <SelectItem value="budget-low">Lowest Budget</SelectItem>
            <SelectItem value="deadline">Deadline</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <BriefcaseIcon className="h-4 w-4 mr-2" strokeWidth={2} aria-hidden="true" />
                    Posted by {job.clientName} • {new Date(job.postedAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">${job.budget}</div>
                  <div className="text-sm text-muted-foreground">Fixed Price</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Deadline: {new Date(job.deadline).toLocaleDateString()}
              </div>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}