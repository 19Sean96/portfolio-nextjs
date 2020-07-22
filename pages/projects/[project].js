import { useRouter } from 'next/router'


export default function Project() {
    const router = useRouter();
    const { project } = router.query
    return (
        <div>
            hey this is the { project } project
        </div>
    )
}