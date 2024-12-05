import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The Hossain Sharif Talukdar Ad-Deen Foundation is dedicated to serving 
              humanity through the establishment of religious institutions, promotion 
              of Islamic education, and implementation of charitable projects that 
              benefit our community.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To create a society where Islamic values flourish, where every individual 
              has access to religious education, and where community support systems 
              are strong and effective.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Commitment to Islamic Principles</li>
              <li>Community Service</li>
              <li>Transparency and Accountability</li>
              <li>Excellence in Execution</li>
              <li>Inclusive Development</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="font-semibold">Chairman</h3>
                <p className="text-muted-foreground">Mr. Hossain Sharif Talukdar</p>
              </div>
              <div>
                <h3 className="font-semibold">Managing Director</h3>
                <p className="text-muted-foreground">To be announced</p>
              </div>
              <div>
                <h3 className="font-semibold">Chief Executive Officer</h3>
                <p className="text-muted-foreground">To be announced</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}