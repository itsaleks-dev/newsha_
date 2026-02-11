import { REVIEW_TEXT } from "@/features/review/config";

import { ReviewFormValues } from "@/shared/ui/Form/schema";
import type { FormSchema } from "@/shared/ui/Form/schema";

export const reviewForm: FormSchema<ReviewFormValues> = {
  title: REVIEW_TEXT.FORM_TITLE,
  submitLabel: REVIEW_TEXT.SUBMIT_LABEL,
  validateBeforeSubmit: true,

  initialValues: {
    rating: 0,
    text: "",
    photos: [],
  },

  fields: [
    {
      name: "rating",
      label: REVIEW_TEXT.RATING_LABEL,
      type: "radio",
      required: true,
      options: REVIEW_TEXT.RATING_OPTIONS,
    },
    {
      name: "text",
      label: REVIEW_TEXT.TEXT_LABEL,
      type: "textarea",
      placeholder: REVIEW_TEXT.TEXT_PLACEHOLDER,
      minLength: REVIEW_TEXT.VALIDATION.TEXT_MIN,
      maxLength: REVIEW_TEXT.VALIDATION.TEXT_MAX,
    },
    {
      name: "photos",
      label: REVIEW_TEXT.PHOTOS_LABEL,
      type: "file",
      multiple: true,
    },
  ],
};
