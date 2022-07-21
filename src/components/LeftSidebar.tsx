import react, { useRef } from 'react'
import GithubLogo from '../assets/Github.svg'
import InstagramLogo from '../assets/Instagram.svg'
import JYLogo from '../assets/JY.svg'
import LinkedInLogo from '../assets/Linkedin.svg'
import MeLogo from '../assets/Me.svg'
import ProjectsLogo from '../assets/Projects.svg'
import SkillsLogo from '../assets/Skills.svg'

function LeftSidebar() {
	const logoMe = document.querySelector('.left_sidebar--menu_me')
	const logoSkills = document.querySelector('.left_sidebar--menu_skills')
	const logoProjects = document.querySelector('.left_sidebar--menu_works')


	return (
		<aside className='left_sidebar'>
			<div className='left_sidebar--logoJY'>
				<img src={JYLogo} alt='Logo Julían Yachelini' />
			</div>
			<div className='left_sidebar--menu'>
				<span
					className='left_sidebar--menu_me logos-menu blurOff'
				>
					<img src={MeLogo} alt='' />
					<div>
						<p>About</p>
					</div>
				</span>
				<span className='left_sidebar--menu_skills logos-menu'>
					<img src={SkillsLogo} alt='' />
					<div>
						<p>Skills</p>
					</div>
				</span>
				<span className='left_sidebar--menu_works logos-menu'>
					<img src={ProjectsLogo} alt='' />
					<div>
						<p>Projects</p>
					</div>
				</span>
			</div>
			<div className='left_sidebar--socialIcons'>
				<a
					target='_blank'
					href='https://github.com/JYachelini/'
					className='left_sidebar--socialIcons_Github'
				>
					<img src={GithubLogo} alt='' />
					<div>
						<p>Github</p>
					</div>
				</a>
				<a
					target='_blank'
					href='https://www.linkedin.com/in/jyachelini/'
					className='left_sidebar--socialIcons_Linkedin'
				>
					<img src={LinkedInLogo} alt='' />
					<div>
						<p>LindekIn</p>
					</div>
				</a>
				<a
					target='_blank'
					href='https://www.instagram.com/yache._/'
					className='left_sidebar--socialIcons_Instagram'
				>
					<img src={InstagramLogo} alt='' />
					<div>
						<p>Instagram</p>
					</div>
				</a>
			</div>
			<div className='left_sidebar--hover'></div>
		</aside>
	)
}

export default LeftSidebar
