import { defineMessages } from 'react-intl';

const messages = defineMessages({
  /*messages for create channel page*/
  channelTitle: {
    id: 'create-new-channel-title',
    defaultMessage: 'Create New Channel',
  },

  channelTitleInput: {
    id: 'channel-input-title',
    defaultMessage: 'Channel Title:',
  },

  briefDescription: {
    id: 'brief-description',
    defaultMessage: 'Brief Description:',
  },

  detailedDescription: {
    id: 'detailed-description',
    defaultMessage: 'Detailed Description:',
  },

  price: {
    id: 'price',
    defaultMessage: 'Price:',
  },

  per: {
    id: 'per',
    defaultMessage: 'Per:',
  },

  unit: {
    id: 'unit',
    defaultMessage: 'Unit:',
  },

  tags: {
    id: 'tags',
    defaultMessage: 'Tags:',
  },

  channelUrl: {
    id: 'channel-url',
    defaultMessage: 'Link Of Your Channel:',
  },

  tagPlaceholder: {
    id: 'tag-placeholder',
    defaultMessage: 'Add a tag',
  },

  imgUpload: {
    id: 'img-upload',
    defaultMessage: 'Upload Image',
  },

  videoUpload: {
    id: 'video-upload',
    defaultMessage: 'Upload Video',
  },

  audioUpload: {
    id: 'audio-upload',
    defaultMessage: 'Upload Audio',
  },

  /*messages specific to create content page*/
  contentTitle: {
    id: 'create-new-content-title',
    defaultMessage: 'Create New Content',
  },

  contentTitleInput: {
    id: 'content-input-title',
    defaultMessage: 'Content Title:',
  },
});

export default messages;
