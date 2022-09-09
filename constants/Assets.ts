interface Image {
  compressed: string;
  full: string;
}

type imageAsset = 'retro_image';

const imageAssets: Record<imageAsset, Image> = {
  retro_image: {
    compressed: 'test',
    full: 'test'
  }
};