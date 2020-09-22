import React from "react"

export default function Data() {
    return [
        {
            title: "ABOUT TEDx",
            content: <div><p>TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover “ideas worth spreading.” TEDx brings the spirit of TED to local communities around the globe through TEDx events. These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED. These events are not controlled by TED, but event organizers agree to abide by the TED format and guidelines for curation, speaker coaching, event organizing and more. More than 3000 TEDx events are now held annually.</p></div>,
            image: "/images/about/about ted.jpg"
        },
        {
            title: "ABOUT TED",
            content: <div><p>TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.</p></div>,
            image: "/images/about/about tedx.jpg"
        }
]

} 

// export const query = graphql `
//   query{
//     aboutimage1: file(relativePath: {eq: "about/placeholder.jpg"}) {
//       childImageSharp{
//         fixed(height: 2000){
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
// }
// `