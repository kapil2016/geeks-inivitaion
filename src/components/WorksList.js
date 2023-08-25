import WorksListItem from "./WorksListItem";
const list = [
    {
        image: 'https://geeksinvention.com/assets/v3/industry-fintech.svg',
        title: 'Fintech Solution',
        subtitle: 'Transforming Fintech with AI',
        description: 'Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets',
        tags: ['Fraud detection', 'Transaction categorisation', 'Risk Scoring'],
        textColor: '#FFFFFF',
        bgColor: '#3f2caa'
    },
    {
        image: 'https://geeksinvention.com/assets/v3/industry-iot.webp',
        title: 'Industrial IoT',
        subtitle: 'Providing a better connected experience',
        description: 'Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.',
        tags: ['Connected manufacturing', 'Aviation', 'Smart Building'],
        textColor: '#FFFFFF',
        bgColor: '#02b5ac'
    },
    {
        image: 'https://geeksinvention.com/assets/v3/industry-education.webp',
        title: 'Smart Education',
        subtitle: 'Elevate your Education Institution',
        description: 'Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry.',
        tags: ['Learning Management', 'Course offering', 'Professional Training'],
        textColor: '#FFFFFF',
        bgColor: '#111111'
    }

]
const WorksList = () => {
    return (
        <div>
            {list.map(item => <WorksListItem {...item}></WorksListItem>)}
        </div>
    )
}

export default WorksList