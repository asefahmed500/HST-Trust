import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, BookOpen, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Communities Through Faith
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dedicated to serving society by establishing religious places and promoting Deen principles
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/donate">Support Our Cause</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Building2 className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Religious Places</h3>
                  <p className="text-muted-foreground">
                    Building and maintaining mosques and religious institutions
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                  <p className="text-muted-foreground">
                    Providing assistance to those in need within our community
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Islamic Education</h3>
                  <p className="text-muted-foreground">
                    Promoting Islamic knowledge and understanding
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <HeartHandshake className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Charitable Works</h3>
                  <p className="text-muted-foreground">
                    Organizing and supporting charitable initiatives
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}