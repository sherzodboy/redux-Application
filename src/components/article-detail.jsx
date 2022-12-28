import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleService from "./../service/article";
import { useDispatch } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSucccess,
} from "../slice/article";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        getArticleDetailSucccess(response.article);
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };
    getArticleDetail();
    // eslint-disable-next-line
  }, [slug]);

  return <div>id: {slug}</div>;
};

export default ArticleDetail;
