import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* View All Templates Button */}
        {/* <div className="text-center mb-12">
          <Button variant="outline" className=" bg-cyan-160 border-cyan-300 text-white hover:bg-cyan-600 px-6 py-2 rounded-md">
            View All Templates
          </Button>
        </div> */}

        {/* Main Heading */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            A Plan for Every Team's Journey
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground">
            No hidden fees. Choose the plan that fits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <Card className="bg-card-cyan-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Basic</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Free forever</p>
                <p className="text-sm text-muted-foreground">100 responses</p>
              </div>
              <Button variant="outline" className="w-full rounded-full text-black-700 bg-cyan-100">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Plus Plan - Highlighted */}
          <Card className="bg-cyan-50 border-cyan-200 relative">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Plus</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold">$50</div>
                <p className="text-sm text-muted-foreground">/month</p>
                <p className="text-sm text-muted-foreground">1,000 responses</p>
              </div>
              <Button className="w-full  rounded-full bg-cyan-500 hover:bg-cyan-600 text-white">
                Choose Plus
              </Button>
            </CardContent>
          </Card>

          {/* Business Plan */}
          <Card className="bg-card border">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Business</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold">$83</div>
                <p className="text-sm text-muted-foreground">/month</p>
                <p className="text-sm text-muted-foreground">10,000 responses</p>
              </div>
              <Button variant="outline" className="w-full rounded-full text-black-700 bg-cyan-100">
                Go Business
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-cyan-500  bg-cyan-500 text-white px-6 py-3 rounded-xl">
            Not sure? See all pricing options
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
