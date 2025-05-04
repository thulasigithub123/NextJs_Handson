export default async function productReview({params}:{params:Promise<{productId:string, reviewId:string}>;
}) {

    const { productId, reviewId} = await params
    return <h1> review {productId} - {reviewId} </h1>
}