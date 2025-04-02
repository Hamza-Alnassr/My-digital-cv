import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Trophy, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import DayLifeChart from "@/components/day-life-chart"

export default function CV() {
  return (
    <main className="min-h-screen bg-white text-slate-700">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#450808] to-[#8F0D0D] text-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:mr-8">
            <h1 className="text-4xl font-bold mb-2">Hamza Luai Alnassr</h1>
            <h2 className="text-xl mb-4">Software Engineer</h2>
            <p className="text-sm mb-4">Student at the University of Sharjah Bachelor's degree in Computer Science.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:haalnassr@gmail.com" className="text-sm hover:underline">
                  haalnassr@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">056-892-3011</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <a
                  href="https://www.linkedin.com/in/hamza-alnassr-3b55ab358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  hamza-alnassr
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 rounded-full overflow-hidden border-4 border-[#E7D192] h-32 w-32 flex-shrink-0">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Hamza Luai Alnassr"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">ABOUT ME</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nationality: Jordanian</li>
                <li>Date of Birth: 11/03/2005 (Age 20)</li>
                <li>Location: Dubai, United Arab Emirates</li>
                <li>Marital Status: Single</li>
                <li>Visa Status: Self Sponsor (Exp. 2033)</li>
                <li>Driving License and Car: Available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">
                EXPERIENCE AND POSITIONS
              </h2>
              <div className="space-y-6">
                <Card className="p-4 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="font-bold text-[#8F0D0D]">Research Assistant</h3>
                    <div className="text-sm text-gray-600">Sep 2024 - Ongoing | Sharjah</div>
                  </div>
                  <div className="text-base font-medium mb-2">University of Sharjah</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>OpenUAE Research and Development about GIS and remote sensing as Research Assistant</li>
                    <li>Programming based with Python and JavaScript for Earth observations and visualizations</li>
                  </ul>
                </Card>

                <Card className="p-4 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="font-bold text-[#8F0D0D]">Tutor of Programming in C++</h3>
                    <div className="text-sm text-gray-600">April 2024 - May 2024 | Sharjah</div>
                  </div>
                  <div className="text-base font-medium mb-2">University of Sharjah</div>
                  <ul className="list-disc pl-5">
                    <li>Worked in Tutoring (UG) students of my university in programming 1 course (C++ oriented)</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">PROJECTS</h2>
              <div className="space-y-6">
                <Card className="p-4 shadow-sm">
                  <h3 className="font-bold text-[#8F0D0D] mb-2">Real Life Applications Project</h3>
                  <div className="text-base font-medium mb-2">University Courses Projects</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Machine Learning Project in identifying cats and dogs from images</li>
                    <li>PDF to Quiz Generator Website with basic Backend but mainly Front End</li>
                    <li>
                      Property Transactions App UI plus some BlockChain Technology using the Software development
                      services, including app design, architecture, and implementation using structured software
                      engineering methodologies such as the Waterfall model.
                    </li>
                  </ul>
                </Card>

                <Card className="p-4 shadow-sm">
                  <h3 className="font-bold text-[#8F0D0D] mb-2">Capstone Project</h3>
                  <div className="text-base font-medium mb-2">University Graduation</div>
                  <ul className="list-disc pl-5">
                    <li>
                      Stroke prediction platform using a hybrid model of CNN, XGBoost, and Random Forest, leveraging
                      health data to maximize accuracy. Future plans include real-time monitoring via smartwatches and
                      MongoDB integration.
                    </li>
                  </ul>
                </Card>

                <Card className="p-4 shadow-sm">
                  <h3 className="font-bold text-[#8F0D0D] mb-2">GIS and Remote Sensing Research Projects</h3>
                  <div className="text-base font-medium mb-2">Research Assistant</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Automating spatial analysis for Sharjah using Python</li>
                    <li>Flood risk mapping project for Sharjah using ArcGIS and Python</li>
                    <li>Getting the elevation and DEM for an image</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">
                A DAY OF MY LIFE
              </h2>
              <div className="flex justify-center py-4">
                <DayLifeChart />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">COURSES TAKEN</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-start gap-2">
                  <span className="font-medium">1.</span>
                  <span>Programming With C++ OOP</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">2.</span>
                  <span>Programming With Java OOP</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">3.</span>
                  <span>Data Structures</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">4.</span>
                  <span>Python language</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">5.</span>
                  <span>Machine learning (theory)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">6.</span>
                  <span>Artificial intelligence</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">7.</span>
                  <span>Networking</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">8.</span>
                  <span>Automata theory (compiler machines and Parsers)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">9.</span>
                  <span>Software Engineering</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">10.</span>
                  <span>Design and analysis of algorithms</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">11.</span>
                  <span>Calculus 1 and Calculus 2</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">12.</span>
                  <span>Digital Login design (theory and Lab)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">13.</span>
                  <span>Probability And Statistics</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">14.</span>
                  <span>Assembly lang and microprocessor</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">15.</span>
                  <span>Linear Algebra</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">16.</span>
                  <span>Database-Mang-Sys</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">
                MY LIFE PHILOSOPHY
              </h2>
              <blockquote className="italic border-l-4 border-[#8F0D0D] pl-4 py-2">
                "Code smart, Lift heavy, earn wisely—respect time, build discipline, and grow stronger every single
                day.."
              </blockquote>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">MOST PROUD OF</h2>
              <div className="space-y-4">
                <Card className="p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Trophy className="text-[#8F0D0D] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Fantastic Achievement</h3>
                      <p>Working with GIS platforms and engines with Python</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Heart className="text-[#8F0D0D] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Another achievement</h3>
                      <p>Applied Software engineering methodologies to build app from zero</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">STRENGTHS</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#8F0D0D]">Git & GitHub</Badge>
                <Badge className="bg-[#8F0D0D]">SQL</Badge>
                <Badge className="bg-[#8F0D0D]">NON-Relational-DB-Monjo</Badge>
                <Badge className="bg-[#8F0D0D]">Pycharm</Badge>
                <Badge className="bg-[#8F0D0D]">Google-Collab</Badge>
                <Badge className="bg-[#8F0D0D]">VS-Code</Badge>
                <Badge className="bg-[#8F0D0D]">GEE & ArcGis-pro & SuperMap Gis & Anaconda</Badge>
                <Badge className="bg-[#8F0D0D]">Motivator & Leader & Time Management</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#8F0D0D]">C++</Badge>
                <Badge className="bg-[#8F0D0D]">Java OOP</Badge>
                <Badge className="bg-[#8F0D0D]">Java-FX</Badge>
                <Badge className="bg-[#8F0D0D]">BlockChain</Badge>
                <Badge className="bg-[#8F0D0D]">HTML</Badge>
                <Badge className="bg-[#8F0D0D]">JavaScript</Badge>
                <Badge className="bg-[#8F0D0D]">CSS</Badge>
                <Badge className="bg-[#8F0D0D]">Python</Badge>
                <Badge className="bg-[#8F0D0D]">scikit learn</Badge>
                <Badge className="bg-[#8F0D0D]">panda</Badge>
                <Badge className="bg-[#8F0D0D]">ArcPy</Badge>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">LANGUAGES</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">English</span>
                    <span>5/5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Arabic</span>
                    <span>5/5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#450808] border-b-2 border-[#E7D192] pb-2 mb-4">EDUCATION</h2>
              <Card className="p-4 shadow-sm">
                <h3 className="font-bold text-[#8F0D0D]">B.Sc. Computer Science - CGPA 3.86</h3>
                <div className="text-base font-medium mb-1">University of Sharjah</div>
                <div className="text-sm text-gray-600">Sept 2022 - Expected to Graduate June 2026</div>
              </Card>
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-[#450808] text-white py-4 text-center text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Hamza Luai Alnassr - Software Engineer</p>
        </div>
      </footer>
    </main>
  )
}

