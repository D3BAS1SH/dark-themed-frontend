import { Card } from "../components/Card"
import type { CollectionEntry } from "astro:content"
import { getColorFromCategory } from "../utils/postsutils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";

export const LatestPosts = (props:{latestPosts:CollectionEntry<'blog'>[]}) => {
    const { latestPosts } = props;
    return (
        <section className="py-69">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Your portal to everything blockchain.</h2>
                    <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">Keep up with the newest trends, updates and insights in the blockchain world, updated weekly.</p>
                </div>
                <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                    {
                        latestPosts.map(({ data:{title,description,category} },index)=>(
                            <Card key={index} buttonText="Read more" color={getColorFromCategory(category)} className={twMerge(index%2===1?'md:hidden':"")}>
                                <Tag color={getColorFromCategory(category)}>{category}</Tag>
                                <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                                <p className="text-lg text-zinc-400 mt-6">{description}</p>
                            </Card>
                        ))
                    }
                    </div>
                    <div className="hidden md:flex flex-col gap-8 mt-16">
                    {
                        latestPosts.map(({ data:{title,description,category} },index)=>(
                            <Card key={index} buttonText="Read more" color={getColorFromCategory(category)} className={twMerge(index%2===0?'md:hidden':"")}>
                                <Tag color={getColorFromCategory(category)}>{category}</Tag>
                                <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                                <p className="text-lg text-zinc-400 mt-6">{description}</p>
                            </Card>
                        ))
                    }
                    </div>
                </div>
                <div className="flex justify-center mt-48 md:mt-32">
                    <CutCornerButton>Read the Blog</CutCornerButton>
                </div>
            </div>
        </section>
    )
}