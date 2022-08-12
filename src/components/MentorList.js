import React, { Component } from "react";
import Mentor from "./Mentor";

export class MentorList extends Component {
  mentors = [
    {
      name: "Divyanshu Kumar",
      company: "IISc",
      tags: [
        "GSod-Mentor",
        "Open Source",
        "AI",
        "Data Science",
        "Mathematics",
        "Deep Learning",
        "Artificial Intelligence",
      ],
      college: "Narula Institute of technology",
      post: "Research Analyst",
      location: "Bengaluru",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQEHfSsC50pzTA/profile-displayphoto-shrink_400_400/0/1658569931320?e=1665619200&v=beta&t=DqRsFI1LUv7Ejob2A7nXNE0C90XxwlzU3vGTcl4yGmQ",
      profilelink: "https://www.linkedin.com/in/divyanshuusingh/",
    },
    {
      name: "Rohit Raheja",
      company: "Mentor Match",
      tags: [
        "ed-tech",
        "funding",
        "startups",
        "team building",
        "entreprenership",
      ],
      college: "Anna University",
      post: "Founder & Ceo",
      location: "Bengaluru",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQGjwA12WOfwQQ/profile-displayphoto-shrink_400_400/0/1641663998250?e=1665619200&v=beta&t=Mex_eSXYT4jl3gT-TjBnh-VCSKLZqfTvlHSeyaaT4oo",
      profilelink: "https://www.linkedin.com/in/rohit-raheja-540418175/",
    },
    {
      name: "Abhishek singh",
      company: "Algo-Zenith",
      tags: ["Mentor", "Campus Captain", "Coding Minutes", "CCP Lead"],
      college: "Anand International College of Engineering, Jaipur",
      post: "Research Analyst",
      location: "Bengaluru",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/D4D35AQE6Di3DCkJdjw/profile-framedphoto-shrink_400_400/0/1653705757883?e=1660888800&v=beta&t=rvYDLid47J9ZjG2JVZMD-CH8oJyTxbEBdMjFz4dKYLU",
      profilelink: "https://www.linkedin.com/in/abhishekcs001/",
    },
    {
      name: "Swapnal Shahil",
      company: "Google Summer of Code",
      tags: [
        "gsoc",
        "life",
        "open source",
        "iitguwahati",
        "softwaredevelopment",
      ],
      college: "Indian Institute of Technology, Guwahati",
      post: "Mentor",
      location: "Patna, Bihar",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQF7aZSZdyRT1Q/profile-displayphoto-shrink_400_400/0/1589690758674?e=1665619200&v=beta&t=6Sx1oVZZG07c0r1rk4THfCKvksADt34x3FapJgBZwao",
      profilelink: "https://www.linkedin.com/in/swapnalshahil/",
    },
    {
      name: "Shrishti Mittal",
      company: "Atal Innovation Mission Aayog",
      tags: [
        "vr",
        "education",
        "innovation",
        "educationaltechnology",
        "learningexperiencedesign",
        "Deep Learning",
        "Artificial Intelligence",
      ],
      college: "University College London",
      post: "Educator",
      location: "Delhi",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/D5635AQHBsYJWomPj7Q/profile-framedphoto-shrink_400_400/0/1657882981462?e=1660888800&v=beta&t=4qtyBdVOtcyiqnrBCRhVvxesZxRtqFUI3WCPurek9sE",
      profilelink: "https://www.linkedin.com/in/srishti-mittal/",
    },
    {
      name: "Naman Buddhiraja",
      company: "Indiamart",
      tags: [
        "Mentor",
        "DevIncept",
        "Android",
        "guidance",
        "engineering",
        "Deep Learning",
        "Artificial Intelligence",
      ],
      college: "Maharaja Surajmal Institute of Technology",
      post: "Engineering",
      location: "Delhi",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGhLQiAZkG8lw/profile-displayphoto-shrink_400_400/0/1659878063069?e=1665619200&v=beta&t=yCeTtGfIlNuTsoHcZlDpaqxYumaKarpFy3P96IE3jKE",
      profilelink: "https://www.linkedin.com/in/naman-budhiraja56/",
    },
    {
      name: "Ankit D.",
      company: "Mentor Graphics",
      tags: [],
      college: "Indraprasthata Institute of Technology",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/D4E03AQGYZOvL4JBviw/profile-displayphoto-shrink_400_400/0/1630683064030?e=1665619200&v=beta&t=ORpfNNAhMj1y72uxTgip7mL5uxncYxmltEBIexYtuwg",
      profilelink: "https://www.linkedin.com/in/ankitdahiya1/",
    },
    {
      name: "Shambhavi Pandey",
      company: "Mentor Me Good",
      tags: [
        "mentoring",
        "careerintech",
        "womeninproduct",
        "productmanagement",
      ],
      college: "Carnegie Mellon University",
      post: "Mentor",
      location: "Austin, Texas",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGJxsH2GkjOeQ/profile-displayphoto-shrink_400_400/0/1596877631892?e=1665619200&v=beta&t=XwjXXMpcerPFi5uN1zomREiBYQpYPjE15Q-bEElw-tY",
      profilelink: "https://www.linkedin.com/in/shambhavipandey/",
    },
    {
      name: "Lakshya Mittal",
      company: "Commvault",
      tags: [
        "sde",
        "productdesigner",
        "softwareengineer",
        "expert",
        "codeforces",
      ],
      college: "Manav Rachna University",
      post: "Engineering",
      location: "Bengaluru",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQH1u8d6vogGxA/profile-displayphoto-shrink_400_400/0/1648472329407?e=1665619200&v=beta&t=zBCPxG8ng7CbsVhdPwO3w-kFRz4QhESF-pvuWXQgBS8",
      profilelink: "https://www.linkedin.com/in/lakshya-mittal-1a511a198/",
    },
  ];
  constructor() {
    super();
    this.state = {
      mentors: this.mentors,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.mentors.map((elm) => {
            return (
              <div className="col-md-4" key={elm.profilelink}>
                <Mentor
                  name={elm.name}
                  company={elm.company}
                  college={elm.college}
                  imageUrl={elm.imageUrl}
                  tags={elm.tags}
                  profilelink={elm.profilelink}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MentorList;
