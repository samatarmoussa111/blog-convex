"use client";

import { Doc } from "@/convex/_generated/dataModel";
import Maths from "../maths/maths";
import { MyAvatar } from "../my-avatar/my-avatar";
import { useUser } from "@clerk/clerk-react";
import { formatDateWithHours } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface Props {
  comment: Doc<"comments">;
}

const CommentsCard = ({ comment }: Props) => {
  const { user } = useUser();
  const ownerComment = useQuery(api.comments.getOwnerComment, {
    id: comment._id,
  });

  if (ownerComment === undefined) {
    return null;
  }

  return (
    <div>
      <div className="flex  items-center space-x-4">
        <MyAvatar alt="Avatar de l'utilisateur" fullName={ownerComment?.name} />
        <div className=" flex flex-col text-sm ">
          <span>{ownerComment?.name}</span>
          <span className="text-muted-foreground">
            {formatDateWithHours(new Date(comment._creationTime))}
          </span>
        </div>
      </div>
      <div className="pl-[60px] mt-4">
        <Maths input={comment.content} />
      </div>
    </div>
  );
};

export default CommentsCard;
