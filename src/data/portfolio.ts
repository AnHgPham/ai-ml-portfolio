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
  { value: "22", label: "public repos", vi: "repo công khai" },
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
      "Turn match footage into measurable signals: court geometry, ball/player tracking, and reviewable outputs.",
    approach:
      "Built a Python pipeline for court keypoints, YOLO detections, temporal smoothing, homography, minimap, and heatmap export.",
    evidence:
      "12 court keypoints, 4-stage ball tracking cascade, 2D court projection, annotated video output.",
    vi:
      "Pipeline phân tích video pickleball: nhận diện sân, theo dõi bóng/người chơi, làm mượt chuyển động, homography, minimap và heatmap.",
    stack: ["YOLOv8-Pose", "OpenCV", "Kalman Filter", "Homography", "Python"],
  },
  {
    id: "kws",
    title: "Open-Set Keyword Spotting",
    type: "Few-Shot Audio ML",
    repo: "https://github.com/AnHgPham/DoAnTotNghiep",
    demo: "",
    problem:
      "Detect custom keywords from a few examples while rejecting unknown audio in streaming use cases.",
    approach:
      "Implemented enrollment with prototype embeddings, thresholding, stream segmentation, voting, and cooldown control.",
    evidence:
      "3-5 sample enrollment, microphone streaming flow, open-set rejection, Colab/local runbooks.",
    vi:
      "Keyword spotting few-shot: đăng ký 3-5 mẫu, prototype embeddings, microphone streaming và từ chối âm thanh ngoài tập.",
    stack: ["Python", "Audio ML", "Embeddings", "Open-set", "Streaming"],
  },
  {
    id: "waste",
    title: "Waste Classification System",
    type: "Deep Learning / Real-Time CV",
    repo: "https://github.com/AnHgPham/waste_classifier",
    demo: "",
    problem:
      "Make waste recognition usable beyond training notebooks: image input, webcam inference, and evaluation.",
    approach:
      "Combined MobileNetV2 classification and YOLOv8 detection for training, evaluation, and real-time demos.",
    evidence:
      "10-class recognition, transfer learning, webcam labels, evaluation artifacts, TFLite path.",
    vi:
      "Hệ thống phân loại rác real-time dùng MobileNetV2 và YOLOv8, có train, evaluation, webcam inference và hướng TFLite.",
    stack: ["TensorFlow", "MobileNetV2", "YOLOv8", "TFLite", "OpenCV"],
  },
];

export const capabilityGroups = [
  {
    title: "Modeling",
    text: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, evaluation.",
    vi: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, đánh giá model.",
  },
  {
    title: "Vision Pipelines",
    text: "YOLO, OpenCV, keypoints, tracking, homography, real-time inference.",
    vi: "YOLO, OpenCV, keypoints, tracking, homography, inference thời gian thực.",
  },
  {
    title: "ML Engineering",
    text: "Python workflows, notebooks to scripts, CLI demos, reproducible runs.",
    vi: "Workflow Python, chuyển notebook thành script, CLI demo, chạy tái lập.",
  },
  {
    title: "Cloud Workflow",
    text: "Colab, Azure VM, Google Cloud, Git/GitHub, Linux CLI.",
    vi: "Colab, Azure VM, Google Cloud, Git/GitHub, Linux CLI.",
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
    text: "Coursera specialization in supervised learning, advanced learning algorithms, and practical ML foundations.",
  },
  {
    period: "2020 - 2023",
    title: "Chu Van An High School - Informatics Class",
    text: "Informatics track with early foundations in programming and computational thinking.",
  },
];
