"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('/api/auth/user')
      const data = await res.json()
      if (data.user) {
        setUser(data.user)
      }
    }
    getUser()
  }, [])

  const handleSignOut = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    })
    router.push("/")
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Dashboard</CardTitle>
          <CardDescription>You are signed in as {user?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}