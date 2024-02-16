import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

/** Displayed when the game object are fetched (loading) */
const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
