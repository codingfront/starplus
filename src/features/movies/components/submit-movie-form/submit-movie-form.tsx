import {
  Button,
  Form,
  Input,
  InputNumber,
  Upload,
  DatePicker,
  Select,
  App,
  Slider,
} from "antd";
import type { GetProp, UploadProps, SliderSingleProps } from "antd";
import TitleSection from "@/components/title-section/title-section";
import InboxOutlined from "@ant-design/icons/InboxOutlined";
import usePostMovie from "@/features/movies/hooks/services/use-post-movie";
import { SubmitMovieStyle } from "./submit-movie-form.style";
import { MovieFormSubmitValuesType } from "@/types/movies";

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const sliderFormatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = value =>
  `${value}%`;

export default function SubmitMovieForm() {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const {
    execute,
    posterFileList,
    handlePosterChange,
    coverFileList,
    handleCoverChange,
    loading,
  } = usePostMovie(form);
  const onFinish = async (values: MovieFormSubmitValuesType) => {
    execute(values);
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG files!");
      return Upload.LIST_IGNORE;
    }
    const isLt150KB = file.size / 1024 < 150;
    if (!isLt150KB) {
      message.error("Image must be smaller than 150KB!");
      return Upload.LIST_IGNORE;
    }

    return false;
  };

  return (
    <>
      <TitleSection level={4}>Submit Movie</TitleSection>
      <SubmitMovieStyle>
        <Form
          className="submit-movie-form"
          scrollToFirstError={{ behavior: "smooth", block: "end", focus: true }}
          variant="filled"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ width: "100%" }}
          initialValues={{
            actors: [],
            language: [],
            country: [],
            director: [],
            awards: [],
          }}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input size="large" placeholder="Enter title" />
          </Form.Item>

          <Form.Item
            name="poster"
            label="Poster (500 × 750 px recommended . aspect ratio 2:3)"
            rules={[{ required: true, message: "Poster is required" }]}
          >
            <Dragger
              beforeUpload={beforeUpload}
              multiple={false}
              fileList={posterFileList}
              onChange={handlePosterChange}
              accept="image/jpeg,image/png"
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag an image to upload</p>
              <p className="ant-upload-hint">Only one image file is allowed.</p>
            </Dragger>
          </Form.Item>
          <Form.Item
            name="user_cover"
            label="Movie Cover (1280 × 720 px recommended . aspect ratio 16∶9)"
            rules={[{ required: true, message: "Movie Cover is required" }]}
          >
            <Dragger
              beforeUpload={beforeUpload}
              multiple={false}
              fileList={coverFileList}
              onChange={handleCoverChange}
              accept="image/jpeg,image/png"
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag an image to upload</p>
              <p className="ant-upload-hint">Only one image file is allowed.</p>
            </Dragger>
          </Form.Item>

          <Form.Item name="imdb_rating" label="IMDB Rating" rules={[{ required: true }]}>
            <Slider
              step={0.1}
              min={0}
              max={10}
              tooltip={{ formatter: sliderFormatter }}
            />
          </Form.Item>
          <Form.Item
            name="rottentomatoes"
            label="Rotten Tomatoes Rating"
            rules={[{ required: true }]}
          >
            <Slider tooltip={{ formatter: sliderFormatter }} />
          </Form.Item>
          <Form.Item
            name="metacritic"
            label="Metacritic Rating"
            rules={[{ required: true }]}
          >
            <Slider tooltip={{ formatter: sliderFormatter }} />
          </Form.Item>

          <Form.Item name="rated" label="Rated" rules={[{ required: true }]}>
            <Select size="large" placeholder="Select rating category">
              <Option value="G">G</Option>
              <Option value="PG">PG</Option>
              <Option value="PG-13">PG-13</Option>
              <Option value="R">R</Option>
              <Option value="NC-17">NC-17</Option>
            </Select>
          </Form.Item>

          <Form.Item name="director" label="Director" rules={[{ required: true }]}>
            <Select
              size="large"
              mode="tags"
              open={false}
              placeholder="Enter director's name"
            />
          </Form.Item>

          <Form.Item name="actors" label="Actors" rules={[{ required: true }]}>
            <Select
              size="large"
              mode="tags"
              open={false}
              placeholder="Enter actors' names"
            />
          </Form.Item>

          <Form.Item
            name="runtime"
            label="Runtime (minutes)"
            rules={[{ required: true }]}
          >
            <InputNumber size="large" placeholder="Runtime" min={1} addonAfter="min" />
          </Form.Item>

          <Form.Item name="year" label="Year" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} size="large" picker="year" />
          </Form.Item>

          <Form.Item name="language" label="Language" rules={[{ required: true }]}>
            <Select
              size="large"
              mode="tags"
              open={false}
              placeholder="Enter language(s)"
            />
          </Form.Item>

          <Form.Item name="imdb_id" label="IMDb ID" rules={[{ required: true }]}>
            <Input size="large" placeholder="Enter IMDb ID : tt2543164" />
          </Form.Item>

          <Form.Item name="plot" label="Plot" rules={[{ required: true }]}>
            <TextArea size="large" rows={4} placeholder="Enter plot summary" />
          </Form.Item>

          <Form.Item name="country" label="Country" rules={[{ required: true }]}>
            <Select
              size="large"
              mode="tags"
              open={false}
              placeholder="Enter country(s)"
            />
          </Form.Item>

          <Form.Item name="released" label="Released Date" rules={[{ required: true }]}>
            <DatePicker
              style={{ width: "100%" }}
              size="large"
              placeholder="Select release date"
            />
          </Form.Item>

          <Form.Item name="writer" label="Writer" rules={[{ required: true }]}>
            <Select
              size="large"
              mode="tags"
              open={false}
              placeholder="Enter writer's name"
            />
          </Form.Item>

          <Form.Item name="awards" label="Awards" rules={[{ required: true }]}>
            <Select size="large" mode="tags" open={false} placeholder="Enter awards" />
          </Form.Item>

          <Form.Item name="dvd" label="DVD Release Date" rules={[{ required: true }]}>
            <DatePicker
              style={{ width: "100%" }}
              size="large"
              placeholder="Select DVD release date"
            />
          </Form.Item>

          <Form.Item
            name="box_office"
            label="Box Office ($)"
            rules={[{ required: true }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              size="large"
              placeholder="Enter box office revenue"
              min={0}
            />
          </Form.Item>

          <Form.Item name="imdb_votes" label="IMDb Votes" rules={[{ required: true }]}>
            <InputNumber
              formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              size="large"
              placeholder="Enter IMDb votes"
              min={0}
            />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} size="large" type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </SubmitMovieStyle>
    </>
  );
}
