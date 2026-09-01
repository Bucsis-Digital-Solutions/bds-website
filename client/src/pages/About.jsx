function About() {
    return (
        <>
            <h1 className='pt-5 text-3xl text-blue-500 text-center'>About Us</h1>
            <p className="text-center text-lg p-5">Learn the story behind Bucsis Digital and the future we envision</p>
            <div className='flex flex-col md:flex-row md:justify-center items-center md:items-stretch p-5'>
                <div className="p-10 m-5 bg-[#1A1036] border-2 border-solid rounded-lg border-[#777] md:w-[30%]">
                    <h2 className="text-2xl font-bold text-center">Vision</h2>
                    <p className="text-center p-5">Our vision is creating a world where everyone owns their data and have access to software that drives success and works for them</p>
                </div>
                <div className="p-10 m-5 bg-[#1A1036] border-2 border-solid rounded-lg border-[#777] md:w-[30%]">
                    <h2 className="text-2xl font-bold text-center">Mission</h2>
                    <p className="text-center p-5">Our mission is building software for businesses, both big and small, that allows them to keep ownership of their own data and supports their own vison without the need to sacrifice their own practices</p>
                </div>
                <div className="p-10 m-5 bg-[#1A1036] border-2 border-solid rounded-lg border-[#777] md:w-[30%]">
                    <h2 className="text-2xl font-bold text-center">Goals</h2>
                    <p className="text-center p-5">Our goal is to bring custom solutions to users that are both accessible and affordable.</p>
                </div>
            </div>
        </>
    )
}

export default About;