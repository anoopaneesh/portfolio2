import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile from './profile.jpg'
import react_icon from './react.png'
import nextjs_icon from './nextjs.png'
import nodejs_icon from './nodejs.svg'
import typescript_icon from './typescript.png'
import javascript_icon from './javascript.png'
import aws_icon from './aws.png'
import graphql_icon from './graphql.png'
import ellucian_logo from './ellucian_logo.jpg'

const assets =   {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    profile,
    react_icon,
    nextjs_icon,
    nodejs_icon,
    typescript_icon,
    javascript_icon,
    aws_icon,
    graphql_icon,
    ellucian_logo
};

export const workData = [
    {
        title: 'Shortd',
        description: 'High-performance, scalable URL shortener',
        bgImage: '/shorten-url.png',
        link:'https://github.com/anoopaneesh/shortd'
    },
    {
        title: 'convert.wasm',
        description: 'Lightweight, privacy-focused media converter',
        bgImage: '/convert1.png',
        link:'http://convert-wasm.vercel.app/'
    },
    {
        title: 'Dyuksha 23',
        description: 'A national-level tech fest webapp',
        bgImage: '/d23.png',
        link:'https://www.dyuksha.org/'
    },
    {
        title: 'Film Flix',
        description: 'Netflix clone website with latest movies , tv shows trailers',
        bgImage: '/filmflix.png',
        link:'https://filimflix.vercel.app/'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    // { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    // { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Node Js, REST' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.react_icon,
    assets.nextjs_icon,
    assets.nodejs_icon,
    assets.typescript_icon,
    assets.javascript_icon,
    assets.aws_icon,
    assets.graphql_icon,
    assets.vscode,
    assets.firebase,
    assets.mongodb,
    assets.figma,
    assets.git
];

export const experienceData = [
  {
    title: "Software Engineer I",
    company: "Ellucian Higher Education Systems",
    location: "Bangalore, India",
    duration: "July 2023 - Present",
    logo: assets.ellucian_logo,
    description: [
      "Elevated unit test coverage from 40% to 90% through code modularization and comprehensive testing scenarios",
      "Mitigated latency by over 50% through the implementation of debouncing and caching frequent API calls in ReactJS",
      "Solely owned the development of a flagship UI feature that efficiently compares student details from ERP systems and databases, enabling seamless data verification and enhancing user productivity",
      "Designed and implemented a permission management system using HOCs and custom hooks, securing access to 20+ pages and reducing unauthorized access",
      "Created automated test cases using Playwright, improving test coverage by 40% and reducing manual testing time",
      "Developed 3+ backend systems using Microservice architecture with GraphQL and NestJS",
      "Achieved a 50% reduction in latency by implementing Redis caching using AWS ElasticCache for infrequently changing items and creating a reusable NestJS package",
      "Designed and implemented a modular JavaScript script using Node.js Worker Threads to parallelize the migration of on-premise user data to a SaaS platform, improving onboarding efficiency for customers"
    ]
  }
];

export default assets