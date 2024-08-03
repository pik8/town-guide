export default function Welcome(props: { name: string }) {
    return (
        <h1 className="text-2xl text-gray-700">
            Hello { props.name }!
        </h1>
    );
}
