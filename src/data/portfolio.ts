export const profile = {
  name: "Phạm Hoàng An",
  role: "AI/ML Intern",
  location: "Hanoi, Vietnam",
  email: "hoanganpham01739@gmail.com",
  github: "https://github.com/AnHgPham",
  linkedin: "https://www.linkedin.com/in/anpham2005/",
  cv: "/assets/PhamHoangAn_CV_Intern.pdf",
  portrait: {
    webp: [
      "/assets/pham-hoang-an-480.webp 480w",
      "/assets/pham-hoang-an-720.webp 720w",
      "/assets/pham-hoang-an-960.webp 960w",
      "/assets/pham-hoang-an-1200.webp 1200w",
    ].join(", "),
    fallback: "/assets/pham-hoang-an-720.jpg",
  },
};

export const proofSignals = [
  { value: "22", label: "public repos", vi: "repo public" },
  { value: "3", label: "AI/CV case studies", vi: "case study AI/CV" },
  { value: "2025", label: "ML specialization", vi: "chứng chỉ ML" },
  { value: "USTH", label: "ICT student", vi: "sinh viên ICT" },
];

export const projects = [
  {
    id: "pickleball",
    title: "Pickleball Match Analysis",
    type: "Computer Vision / Video Intelligence",
    repo: "https://github.com/AnHgPham/computer-vision-pickleball-detection-court",
    demo: "https://drive.google.com/file/d/1-T7m2KjSCVFxOKF3X5jqs_or0lnsc-L7/view?usp=sharing",
    problem:
      "Recruiters need to see whether I can connect model training, video inference, geometry, and useful outputs in one working system.",
    approach:
      "Built a pipeline for court keypoints, ball/player detection, temporal smoothing, homography projection, minimaps, and shot heatmaps.",
    evidence:
      "12 court keypoints, 4-stage ball tracking cascade, 2D court projection, exportable annotated outputs.",
    vi:
      "Pipeline phân tích video pickleball: court keypoints, tracking bóng/người chơi, Kalman smoothing, homography, minimap và heatmap.",
    stack: ["YOLOv8-Pose", "OpenCV", "Kalman Filter", "Homography", "Python"],
  },
  {
    id: "kws",
    title: "Open-Set Keyword Spotting",
    type: "Few-Shot Audio ML",
    repo: "https://github.com/AnHgPham/DoAnTotNghiep",
    demo: "",
    problem:
      "Voice interfaces need to learn new keywords from very few samples while rejecting unknown audio in real streams.",
    approach:
      "Designed few-shot enrollment with prototype embeddings, thresholding, streaming segmentation, voting, and cooldown logic.",
    evidence:
      "3-5 sample enrollment, microphone streaming path, open-set rejection workflow, reproducible Colab/local runbooks.",
    vi:
      "Đồ án keyword spotting few-shot: đăng ký 3-5 mẫu, prototype embeddings, streaming microphone và từ chối âm thanh ngoài tập.",
    stack: ["Python", "Audio ML", "Embeddings", "Open-set", "Streaming"],
  },
  {
    id: "waste",
    title: "Waste Classification System",
    type: "Deep Learning / Real-Time CV",
    repo: "https://github.com/AnHgPham/waste_classifier",
    demo: "",
    problem:
      "Applied CV systems need a clear path from training and evaluation to real-time inference that non-ML users can understand.",
    approach:
      "Combined MobileNetV2 classification and YOLOv8 detection for image, webcam, and evaluation workflows.",
    evidence:
      "10-class waste recognition, transfer learning, webcam labels, confusion/evaluation artifacts, TFLite path.",
    vi:
      "Hệ thống phân loại rác real-time dùng MobileNetV2 và YOLOv8, có workflow train/eval/inference webcam.",
    stack: ["TensorFlow", "MobileNetV2", "YOLOv8", "TFLite", "OpenCV"],
  },
];

export const capabilityGroups = [
  {
    title: "Modeling",
    text: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, model evaluation.",
    vi: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, đánh giá model.",
  },
  {
    title: "Vision Pipelines",
    text: "YOLO, OpenCV, keypoints, tracking, homography, real-time inference.",
    vi: "YOLO, OpenCV, keypoints, tracking, homography, inference thời gian thực.",
  },
  {
    title: "ML Engineering",
    text: "Python-first workflows, notebooks to scripts, CLI demos, reproducible runs.",
    vi: "Workflow Python, chuyển notebook thành script, CLI demo, run có thể tái lập.",
  },
  {
    title: "Cloud Workflow",
    text: "Google Colab, Azure VM, Google Cloud, Git/GitHub, Linux CLI.",
    vi: "Google Colab, Azure VM, Google Cloud, Git/GitHub, Linux CLI.",
  },
];

export const timeline = [
  {
    period: "2023 - 2026",
    title: "USTH - Information and Communication Technology",
    text: "Undergraduate ICT program focused on programming, AI/ML, computer vision, and applied software projects.",
  },
  {
    period: "2025",
    title: "Machine Learning Specialization - Stanford / DeepLearning.AI",
    text: "Coursera specialization covering supervised learning, advanced learning algorithms, and practical ML foundations.",
  },
  {
    period: "2020 - 2023",
    title: "Chu Van An High School - Informatics Class",
    text: "Informatics-focused high school track with early foundations in programming and computational thinking.",
  },
];
