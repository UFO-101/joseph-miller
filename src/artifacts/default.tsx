import React from 'react';
import { ExternalLink, FileText, Github, Twitter } from 'lucide-react';
import ParticleBackground from '../components/background/ParticleBackground';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <ParticleBackground />
      {/* Header with Social Links */}
      <div className="relative z-10">
        <header className="bg-gray-800/80 shadow-sm backdrop-blur-sm">
          <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-gray-100">Joseph Miller</h1>
            <p className="text-xl text-gray-300 mt-2">Machine Learning Researcher focusing on AI Safety</p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center space-x-6">
              <a 
                href="https://docs.google.com/document/d/1_Kpy1YjckrXtlCcA7aKGVFZLVmLIVkvuh_qvfINLhcE/edit?tab=t.0" 
                className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </a>
              <a 
                href="https://github.com/UFO-101" 
                className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a 
                href="https://x.com/JosephMiller_" 
                className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </a>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* About */}
          <section className="mb-12">
            <p className="text-lg text-gray-300">
              I'm an AI Safety researcher working on mechanistic interpretability and circuit discovery.
            </p>
          </section>

          {/* Publications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Publications</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md border-l-4 border-blue-500 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">
                  Transformer Circuit Faithfulness Metric are Not Robust
                  <span className="ml-2 text-blue-400">(COLM 2024)</span>
                </h3>
                <p className="text-gray-300 mt-1">Joseph Miller*, Bilal Chughtai, William Saunders</p>
                <div className="mt-2 space-x-4">
                  <a href="https://arxiv.org/abs/2407.08734" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Paper <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://ufo-101.github.io/auto-circuit" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Library / Code <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://x.com/JosephMiller_/status/1811629344453984362" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Tweet <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://www.lesswrong.com/posts/kp5h6khwrK47psMaA/transformer-circuit-faithfulness-metrics-are-not-robust" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Blog Post 1 <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://www.lesswrong.com/posts/caZ3yR5GnzbZe2yJ3/how-to-do-patching-fast" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Blog Post 2 <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md border-l-4 border-yellow-500 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">
                  Gradient Routing: Masking Gradients to Localize Computation in Neural Networks
                  <span className="ml-2 text-gray-300">(under review)</span>
                </h3>
                <p className="text-gray-300 mt-1">Alex Cloud*, Jacob Goldman-Wetzler*, Evžen Wybitul*, Joseph Miller*, Alexander Matt Turner</p>
                <div className="mt-2 space-x-4">
                  <a href="https://arxiv.org/abs/2410.04332" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Paper <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://github.com/kxcloud/gradient-routing" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Code <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://turntrout.com/gradient-routing" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Blog Post <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://x.com/Turn_Trout/status/1865156788750028846" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Tweet <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md border-l-4 border-yellow-500 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">
                  Refined SAEs: Transmuting Compute into Interpretability
                  <span className="ml-2 text-gray-300">(forthcoming)</span>
                </h3>
                <p className="text-gray-300 mt-1">Kola Ayonrinde*, Joseph Miller*, Evžen Wybitul*, Alexander Matt Turner</p>
                <div className="mt-2">
                  <span className="text-gray-300">Links coming soon</span>
                </div>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md border-l-4 border-blue-500 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">
                  Adversarial Policies Beat Superhuman Go AIs
                  <span className="ml-2 text-blue-400">(ICML 2023)</span>
                </h3>
                <p className="text-gray-300 mt-1">
                  Tony T. Wang*, Adam Gleave*, Tom Tseng, Kellin Pelrine, Nora Belrose, Joseph Miller, Michael D. Dennis, 
                  Yawen Duan, Viktor Pogrebniak, Sergey Levine, Stuart Russell
                </p>
                <div className="mt-2 space-x-4">
                  <a href="https://arxiv.org/abs/2211.00241" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Paper <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://goattack.far.ai/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Website <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://x.com/ARGleave/status/1587875100732182530" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Tweet <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="https://archive.is/EBcVa" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Press <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Research Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Research Experience</h2>
            
            <div className="bg-gray-800/80 p-6 rounded-xl shadow-md mb-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-100">Independent Researcher / <a href="https://www.matsprogram.org/" className="text-blue-400 hover:text-blue-300">MATS</a> Scholar</h3>
              <p className="text-gray-400">August 2023 - Present</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Researching circuit discovery in mechanistic interpretability under William Saunders</li>
                <li>• Published AutoCircuit, a library for efficient automatic circuit discovery</li>
                <li>• Contributed to Gradient Routing development in the MATS program</li>
              </ul>
            </div>

            <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-100"><a href="https://far.ai/" className="text-blue-400 hover:text-blue-300">FAR AI</a></h3>
              <p className="text-gray-400">Research Engineer, July 2022 – August 2023</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Built visualization tools for analyzing Go training games</li>
                <li>• Developed interactive demonstrations for research results</li>
              </ul>
            </div>
          </section>

          {/* Notable Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Notable Projects</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">hypnogram.xyz</h3>
                <p className="text-gray-400 mt-1">Founder / Solo Engineer, September 2021 – April 2022</p>
                <p className="text-gray-300 mt-2">
                  Built a popular text-to-image generation website that generated over 5.4 million images for 1.2 million users.
                  Developed improved versions of open source text-to-image methods and implemented the full stack infrastructure,
                  including GPU cluster management, backend database, and a zero-dependency frontend in Svelte.
                </p>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <a href="https://ufo-101.github.io/auto-circuit/" 
                   className="block group">
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 inline-flex items-center">
                    AutoCircuit
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </h3>
                  <p className="text-gray-300 mt-2">
                    A library for efficient patching and automatic circuit discovery.
                  </p>
                </a>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <a href="https://www.lesswrong.com/posts/cgqh99SHsCv3jJYDS/we-found-an-neuron-in-gpt-2" 
                   className="block group">
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 inline-flex items-center">
                    We Found An Neuron In GPT-2
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </h3>
                  <p className="text-gray-300 mt-2">
                    1st Prize winning entry to an ML interpretability research hackathon. 
                    Found a single neuron for the word "an". Cited in research by OpenAI and Anthropic.
                  </p>
                </a>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <a href="https://github.com/UFO-101/PerspectivePointCloud" 
                   className="block group">
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 inline-flex items-center">
                    Perspective Point Cloud
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Fun point cloud art project using PyTorch and Blender.
                  </p>
                </a>
              </div>
            </div>
          </section>

          {/* Other Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Other Experience</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">Privitar</h3>
                <p className="text-gray-400">Software Engineer, August 2020 – December 2021</p>
                <p className="text-gray-300 mt-2">
                  On a project to enable compatibility with AWS Glue, I found a way to leverage our existing support for 
                  JDBC via AWS Athena such that we could write less code and finish the project ahead of schedule.
                </p>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">ComplyAdvantage</h3>
                <p className="text-gray-400">Software Engineering Intern, July – September 2019</p>
                <p className="text-gray-300 mt-2">
                  Rewritten a Python web app that is used to run large spreadsheets of names against the company's 
                  search algorithm. I used Celery queues to enable massive concurrency and ensure reliability.
                </p>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">FundamentalVR</h3>
                <p className="text-gray-400">Software Engineering Intern, July – September 2018</p>
                <p className="text-gray-300 mt-2">
                  Tasked with creating dynamic mesh deformation with realistic haptic feeling, I implemented 
                  a technique that uses voxel approximations of 3D models.
                </p>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-gray-100">Teaching Assistant</h3>
                <p className="text-gray-400">
                  <a href="https://www.cambridgeaisafety.org/ml-bootcamps" className="text-blue-400 hover:text-blue-300">
                    Cambridge Machine Learning for Alignment Bootcamp
                  </a>
                  , January and March 2023
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PersonalWebsite;