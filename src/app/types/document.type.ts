const enum DocumentEnum {
  PICTURE= 'PICTURE',
  SOUND= 'SOUND',
  VIDEO= 'VIDEO'
};

export default interface IDocument {
  picture: DocumentEnum.PICTURE,
  sound: DocumentEnum.SOUND,
  video:  DocumentEnum.VIDEO
};
