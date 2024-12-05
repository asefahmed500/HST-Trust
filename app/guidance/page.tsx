import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GuidancePage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Religious Guidance</h1>
      
      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="articles">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Islamic Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  An introduction to the fundamental principles of Islam and their 
                  application in daily life.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>The Importance of Charity in Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exploring the significance of charitable giving and its impact on 
                  both the giver and the receiver.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faqs">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">How can I calculate my Zakat?</h3>
                  <p className="text-muted-foreground">
                    Detailed explanation of Zakat calculation methods and requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">What are the prayer times?</h3>
                  <p className="text-muted-foreground">
                    Information about daily prayer times and their calculation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Prayer Guide</h3>
                  <p className="text-muted-foreground">
                    Comprehensive guide to performing prayers correctly.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Ramadan Calendar</h3>
                  <p className="text-muted-foreground">
                    Annual Ramadan calendar with prayer and fasting times.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}