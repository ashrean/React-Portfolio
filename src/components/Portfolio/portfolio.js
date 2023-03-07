import React from "react";

import comingsoon2 from "../../../assets/images/comingsoon2.jpeg";

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src={Dashboard} alt="dashboard" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/captaiiinsolo/jobDashboardProject"
                target="_blank"
                rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={NoteTaker} alt="noteTaker" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/ashrean/NoteTaker-hw11"
                target="_blank"
                rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={GenerateReadme} alt="generateReadme" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/ashrean/generateREADME"
                target="_blank"
                rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={comingsoon2} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/ashrean"
                target="_blank"
                rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={comingsoon2} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/ashrean"
                target="_blank"
                rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={comingsoon2} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/ashrean"
                target="_blank"
                rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Portfolio;
